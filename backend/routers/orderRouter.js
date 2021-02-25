const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const orderRouter = express.Router();

const { getOrders } = require("../models/orderModel.js");

orderRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const orders = await getOrders();

    res.send(orders);
  })
);

module.exports = orderRouter;
