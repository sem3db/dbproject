const { adminExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

//report 1
async function quaterlySalesReport(year) {
  try {
    const report = {};

    const Categories = await adminExecuteSQL(
      "SELECT DISTINCT category_id, category_name FROM category"
    );

    const orders_by_category_q1 = await getOneQuaterSales(year, 1);
    const orders_by_category_q2 = await getOneQuaterSales(year, 2);
    const orders_by_category_q3 = await getOneQuaterSales(year, 3);
    const orders_by_category_q4 = await getOneQuaterSales(year, 4);

    for (var c = 0; c < Categories.length; c++) {
      var cat_id = Categories[c].category_id;
      var cat_name = Categories[c].category_name;
      report[cat_name] = {
        Q1: orders_by_category_q1[cat_id.toString()]
          ? orders_by_category_q1[cat_id.toString()]
          : 0,
        Q2: orders_by_category_q2[cat_id.toString()]
          ? orders_by_category_q2[cat_id.toString()]
          : 0,
        Q3: orders_by_category_q3[cat_id.toString()]
          ? orders_by_category_q3[cat_id.toString()]
          : 0,
        Q4: orders_by_category_q4[cat_id.toString()]
          ? orders_by_category_q4[cat_id.toString()]
          : 0,
      };
    }

    return report;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function getOneQuaterSales(year, quater) {
  let orders_of_quater;
  switch (quater) {
    case 1:
      orders_of_quater = await adminExecuteSQL(
        "SELECT order_id FROM productorder WHERE DATE(order_date) BETWEEN '?-01-01' AND '?-03-31' ",
        [parseInt(year), parseInt(year)]
      );

      break;
    case 2:
      orders_of_quater = await adminExecuteSQL(
        "SELECT order_id FROM productorder WHERE DATE(order_date) BETWEEN '?-04-01' AND '?-06-30' ",
        [parseInt(year), parseInt(year)]
      );
      break;
    case 3:
      orders_of_quater = await adminExecuteSQL(
        "SELECT order_id FROM productorder WHERE DATE(order_date) BETWEEN '?-07-01' AND '?-09-30' ",
        [parseInt(year), parseInt(year)]
      );
      break;
    case 4:
      orders_of_quater = await adminExecuteSQL(
        "SELECT order_id FROM productorder WHERE DATE(order_date) BETWEEN '?-10-01' AND '?-12-31' ",
        [parseInt(year), parseInt(year)]
      );
      break;

    default:
      break;
  }

  var orders_by_cat = {};

  for (var i = 0; i < orders_of_quater.length; i++) {
    var ordered_products = await adminExecuteSQL(
      "SELECT (SELECT product.category_id from product where product.product_id=order_product.product_id) as category, sum(order_product.product_price)  as order_tot_price FROM order_product WHERE order_product.order_id=? group by category ",
      [parseInt(orders_of_quater[i].order_id)]
    );

    for (var j = 0; j < ordered_products.length; j++) {
      var ordered_cat_product = ordered_products[j];
      if (ordered_cat_product.category in orders_by_cat) {
        orders_by_cat[ordered_cat_product.category] +=
          ordered_cat_product.order_tot_price;
      } else {
        orders_by_cat[ordered_cat_product.category] =
          ordered_cat_product.order_tot_price;
      }
    }
  }
  return orders_by_cat;
}

//report 2
async function productsWithMostNumberOfSales(from, to) {
  try {
    const product = await adminExecuteSQL(
      " SELECT SUM(quantity) AS sale_quantity, product_id, product_name, description, weight, dimension, brand FROM productorder NATURAL JOIN order_product natural join product WHERE order_date between ? AND ? GROUP BY product_id ORDER BY quantity DESC LIMIT 5",
      [from, to]
    );
    return product;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

//report 3
async function productCategoryWithMostOrders() {
  try {
    const category = await adminExecuteSQL(
      "SELECT category_name FROM order_product o, product p, category c WHERE o.product_id = p.product_id AND p.category_id = c.category_id GROUP BY category_name ORDER BY count(c.category_name) DESC LIMIT 1"
    );
    return category[0].category_name;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

//report 4
async function timePeriodWithMostIneterest(product_id) {
  try {
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

//report 5
async function customerOrderReport() {
  try {
    const orderData = await adminExecuteSQL(
      "select customer_id,customer_type, order_id, date(order_date) as order_date, total_payment, payment_method from productorder order by customer_id"
    );

    console.log(orderData);

    for (let index = 0; index < orderData.length; index++) {
      const order = orderData[index];
      var name;
      if (order.customer_type == "Registered") {
        name = await adminExecuteSQL(
          "SELECT first_name, last_name FROM registered_customer WHERE reg_customer_id=?",
          [order.customer_id]
        );
      } else {
        name = await adminExecuteSQL(
          "SELECT first_name, last_name FROM guest_customer WHERE guest_id=?",
          [order.customer_id]
        );
      }
      order.customer_name = name[0].first_name + " " + name[0].last_name;
    }
    return orderData;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}
module.exports = {
  quaterlySalesReport,
  productCategoryWithMostOrders,
  productsWithMostNumberOfSales,
  customerOrderReport,
};
