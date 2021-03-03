const {
  adminExecuteSQL,
  customerExecuteSQL,
} = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function getOrders() {
  try {
    const orderData = await adminExecuteSQL(
      "SELECT order_id, customer_id, customer_type, total_payment,delivery_status, order_date FROM ProductOrder"
    );
    for (let index = 0; index < orderData.length; index++) {
      const order = orderData[index];

      var user;
      if (order.customer_type == "Registered") {
        user = await adminExecuteSQL(
          "SELECT first_name, address_line_1, address_line_2, city, phone from customerdetails where reg_customer_id=?",
          [parseInt(order.customer_id)]
        );
      } else {
        user = await adminExecuteSQL(
          "SELECT first_name, address_line_1, address_line_2, city, phone from guest_customer where guest_id=?",
          [parseInt(order.customer_id)]
        );
      }

      order.user = user[0].first_name;
      order.address_line_1 = user[0].address_line_1;
      order.address_line_2 = user[0].address_line_2;
      order.city = user[0].city;
      order.phone = user[0].phone;
    }
    return orderData;
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

async function setDeliveryStatus(order_id) {
  try {
    await adminExecuteSQL(
      "UPDATE productorder SET delivery_status=? WHERE order_id=?",
      ["delivered", order_id]
    );
    return "updated";
  } catch (e) {
    return "Error";
  }
}

async function moveToOrder_registered(
  cust_id,
  paymethod,
  delstat,
  delmethod,
  note
) {
  try {
    const moveState = await customerExecuteSQL(
      "call moveToOrder_reg(?,?,?,?,?)",
      [cust_id, paymethod, delstat, delmethod, note]
    ).then();
    console.log(moveState);
    return moveState;
  } catch (e) {
    console.log(e);
    console.log(JSON.parse(JSON.stringify(e))["error"]);
    return "Error";
  }
}

async function moveToOrder_guest(
  paymethod,
  delstat,
  delmethod,
  note,
  productlist,
  email,
  phone,
  first_name,
  last_name,
  zip_code,
  address_line_1,
  address_line_2,
  city,
  state
) {
  try {
    const raw_cust_id = await customerExecuteSQL(
      "call newGuest(?,?,?,?,?,?,?,?,?)",
      [
        email,
        phone,
        first_name,
        last_name,
        zip_code,
        address_line_1,
        address_line_2,
        city,
        state,
      ]
    ).then();
    const cust_id = JSON.parse(JSON.stringify(raw_cust_id))["cust_id"];
    const moveState = await customerExecuteSQL(
      "call moveToOrder_gst(?,?,?,?,?,?)",
      [
        cust_id,
        paymethod,
        delstat,
        delmethod,
        note,
        JSON.stringify(productlist),
      ]
    ).then();
    console.log(moveState);
    return moveState;
  } catch (e) {
    console.log(JSON.parse(JSON.stringify(e))["error"]);
    return "ERROR";
  }
}

async function getOrderList(userID) {
  try {
    //const cart_id = customerExecuteSQL("select getcartid(?)",[userID]);
    const orderlist = customerExecuteSQL(
      "select order_id,date(order_date) as order_date,delivery_estimate,total_payment,delivery_status from productorder where customer_id = ? and customer_type= ?",
      [parseInt(userID), "Registered"]
    ).then();
    //console.log(orderlist);
    return orderlist;
  } catch (e) {
    console.log(JSON.parse(JSON.stringify(e))["error"]);
    return "ERROR";
  }
}

async function orderDetailes(orderID) {
  try {
    const order = await customerExecuteSQL(
      "select order_id,order_date,delivery_estimate,total_payment,delivery_status from productorder where order_id = ?",
      [orderID]
    ).then();
    const productlist = await customerExecuteSQL(
      "select product_name,product_price,product_offer from order_product join product on order_product.product_id = product.product_id where order_product.order_id=?",
      [orderID]
    ).then();
    return [order, productlist];
  } catch (e) {
    console.log(JSON.parse(JSON.stringify(e))["error"]);
    return "ERROR";
  }
}

module.exports = {
  getOrders,
  moveToOrder_registered,
  moveToOrder_guest,
  setDeliveryStatus,
  getOrderList,
  orderDetailes,
};
