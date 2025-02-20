const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { isAuth, isAdmin } = require("../utils.js");
const {
  quaterlySalesReport,
  productCategoryWithMostOrders,
  productsWithMostNumberOfSales,
  timePeriodWithMostIneterest,
  customerOrderReport,
} = require("../models/reportModel.js");

const reportRouter = express.Router();

reportRouter.get(
  "/report-1/:year",

  expressAsyncHandler(async (req, res) => {
    const qsales = await quaterlySalesReport(req.params.year);
    if (qsales) {
      res.send(qsales);
    } else {
      res.status(404).send({ message: "Sales Not Found" });
    }
  })
);

reportRouter.post(
  "/report-2",

  expressAsyncHandler(async (req, res) => {
    const product = await productsWithMostNumberOfSales(
      req.body.from,
      req.body.to
    );
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "No Products Found" });
    }
  })
);

reportRouter.get(
  "/report-3",
  expressAsyncHandler(async (req, res) => {
    const category = await productCategoryWithMostOrders();
    if (category) {
      res.send(category);
    } else {
      res.status(404).send({ message: "No Category Found" });
    }
  })
);

reportRouter.get(
  "/report-4/:product",
  expressAsyncHandler(async (req, res) => {
    const orders = await timePeriodWithMostIneterest(req.params.product);
    if (orders) {
      res.send(orders);
    } else {
      res.status(404).send({ message: "No Orders Found" });
    }
  })
);

reportRouter.get(
  "/report-5",
  expressAsyncHandler(async (req, res) => {
    const orderReport = await customerOrderReport();
    if (orderReport) {
      res.send(orderReport);
    } else {
      res.status(404).send({ message: "Orders Not Found" });
    }
  })
);
module.exports = reportRouter;
