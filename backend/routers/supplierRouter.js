const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { getSuppliers } = require("../models/supplierModel.js");

const supplierRouter = express.Router();

supplierRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const suppliers = await getSuppliers();
    res.send(suppliers);
  })
);

module.exports = supplierRouter;
