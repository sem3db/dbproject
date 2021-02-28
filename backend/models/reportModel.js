const { adminExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

//report 2
async function productsWithMostNumberOfSales(from, to) {
  try {
    const product = await adminExecuteSQL(
      " SELECT SUM(quantity) AS quantity, product_id, product_name, description, weight, dimension, brand FROM productorder NATURAL JOIN order_product natural join product WHERE order_date between ? AND ? GROUP BY product_id ORDER BY quantity DESC LIMIT 5",
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
