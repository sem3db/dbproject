const { adminExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function getOrders() {
  try {
    const orderData = await adminExecuteSQL(
      "SELECT order_id, customer_id, customer_type, total_payment,delivery_status FROM ProductOrder"
    );
    for (let index = 0; index < orderData.length; index++) {
      const order = orderData[index];

      var user;
      if (order.customer_type == "Registered") {
        user = await adminExecuteSQL(
          "SELECT first_name from registered_customer where reg_customer_id=?",
          [parseInt(order.customer_id)]
        );
      } else {
        user = await adminExecuteSQL(
          "SELECT first_name from guest_customer where guest_id=?",
          [parseInt(order.customer_id)]
        );
      }

      order.user = user[0].first_name;
    }
    return orderData;
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

module.exports = {
  getOrders,
};
