const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const orderRouter = express.Router();
const { isAuth, isAdmin } = require("../utils.js");
const {
  getOrders,
  moveToOrder_registered,
  moveToOrder_guest,
  setDeliveryStatus,
  getOrderList,
  orderDetailes
} = require("../models/orderModel.js");

orderRouter.get(
  "/",

  expressAsyncHandler(async (req, res) => {
    const orders = await getOrders();

    res.send(orders);
  })
);

orderRouter.get(
  "/setDeliverStatus/:id",
  expressAsyncHandler(async (req, res) => {
    const isUpdate = await setDeliveryStatus(req.params.id);
    res.send(isUpdate);
  })
);

orderRouter.post(
  "/placeorder/registered",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const customerID = req.user.reg_customer_id;
    //const customerID = req.body.customerID;
    const paymethod = req.body.paymentMethod;
    const delstat = req.body.delstat;
    const delmethod = req.body.deliveryMethod;
    const note = req.body.note;

    if (customerID && paymethod && delstat && delmethod) {
      const orderState = await moveToOrder_registered(
        customerID,
        paymethod,
        delstat,
        delmethod,
        note
      ).then();
      res.send(orderState);
    } else {
      res.status(404).send({ message: "Invalid Request" });
    }
  })
);

orderRouter.post(
  "/placeorder/guest",
  expressAsyncHandler(async (req, res) => {
    const paymethod = req.body.paymethod;
    const delstat = req.body.delstat;
    const delmethod = req.body.delmethod;
    const note = req.body.note;
    const productlist = req.body.productlist;

    const email = req.body.email;
    const phone = req.body.phone;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const zip_code = req.body.zip_code;
    const address_line_1 = req.body.address_line_1;
    const address_line_2 = req.body.address_line_2;
    const city = req.body.city;
    const state = req.body.state;

    if (paymethod && delstat && delmethod && productlist) {
      const orderState = await moveToOrder_guest(
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
      ).then();
      res.send(orderState);
    } else {
      res.status(404).send({ message: "Invalid Request" });
    }
  })
);



orderRouter.get(
  "/list",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orderList = await getOrderList(req.user.reg_customer_id);
    res.send(orderList);
  })
);

orderRouter.get(
  "/orderdetail/:orderId",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orderdetail = await orderDetailes(req.params.orderID);
    res.send(orderdetail);
  })
);


module.exports = orderRouter;
