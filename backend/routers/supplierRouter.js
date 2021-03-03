const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { getSuppliers } = require("../models/supplierModel.js");
const { isAuth, isAdmin } = require("../utils.js");
const supplierRouter = express.Router();

supplierRouter.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const suppliers = await getSuppliers();
    res.send(suppliers);
  })
);

module.exports = supplierRouter;
