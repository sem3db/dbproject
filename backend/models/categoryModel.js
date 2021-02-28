const { adminExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function getCategories() {
  try {
    const categories = await adminExecuteSQL(
      "SELECT category_name FROM category"
    );
    return categories;
  } catch (e) {
    return "Error";
  }
}

async function getSubCategories(category_id) {
  try {
    const subcategories = await adminExecuteSQL(
      "SELECT subcat_name FROM subcategory WHERE category_id=?",
      [category_id]
    );
    return subcategories;
  } catch (e) {
    return "Error";
  }
}

module.exports = {
  getCategories,
  getSubCategories,
};
