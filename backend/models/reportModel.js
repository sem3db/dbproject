const { adminExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

//report 1
async function quaterlySalesReport(year) {
  try {
    // const await adminExecuteSQL(
    //   "SELECT order_id, product_name,brand, product_price,quantity,product_offer, total_payment, order_date FROM productorder NATURAL JOIN order_product NATURAL JOIN product WHERE YEAR(order_date)=? AND MONTH(order_date) BETWEEN 1 AND 3",
    //   [year]
    // );
  } catch (e) {
    return "Error";
  }
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
    return "Error";
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
    return "Error";
  }
}

//report 4
async function timePeriodWithMostIneterest(product_id) {
  try {
  } catch (e) {
    return "Error";
  }
}

module.exports = {
  productCategoryWithMostOrders,
  productsWithMostNumberOfSales,
};
