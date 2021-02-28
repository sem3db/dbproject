const { adminExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function getSuppliers() {
  try {
    const suppliers = await adminExecuteSQL(
      "SELECT supplier_name FROM supplier"
    );
    return suppliers;
  } catch (e) {
    return "Error";
  }
}

module.exports = {
  getSuppliers,
};
