const { adminExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

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

module.exports = {
  productCategoryWithMostOrders,
};
