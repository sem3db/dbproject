const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const orderRouter = express.Router();
const { isAuth, isAdmin } = require("../utils.js");
const {
  getOrders,
  moveToOrder_registered,
  moveToOrder_guest,
} = require("../models/orderModel.js");

orderRouter.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await getOrders();

    res.send(orders);
  })
);

orderRouter.post(
  "/placeorder/registered",
  expressAsyncHandler(async (req, res) => {
    const customerID = req.body.customerID;
    const paymethod = req.body.paymethod;
    const delstat = req.body.delstat;
    const delmethod = req.body.delmethod;
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
    const customerID = req.body.customerID;
    const paymethod = req.body.paymethod;
    const delstat = req.body.delstat;
    const delmethod = req.body.delmethod;
    const note = req.body.note;
    const productlist = req.body.productlist;

    if (customerID && paymethod && delstat && delmethod && productlist) {
      const orderState = await moveToOrder_guest(
        customerID,
        paymethod,
        delstat,
        delmethod,
        note,
        productlist
      ).then();
      res.send(orderState);
    } else {
      res.status(404).send({ message: "Invalid Request" });
    }
  })
);

module.exports = orderRouter;
