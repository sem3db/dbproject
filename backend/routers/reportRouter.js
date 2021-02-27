const express = require("express");
const expressAsyncHandler = require("express-async-handler");

const { productCategoryWithMostOrders } = require("../models/reportModel.js");

const reportRouter = express.Router();

reportRouter.get(
  "/report-3",
  expressAsyncHandler(async (req, res) => {
    const category = await productCategoryWithMostOrders();
    res.send(category);
  })
);

module.exports = reportRouter;
