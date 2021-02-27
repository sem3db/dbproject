const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const {
  getCategories,
  getSubCategories,
} = require("../models/categoryModel.js");

const categoryRouter = express.Router();

categoryRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const categories = await getCategories();
    res.send(categories);
  })
);
categoryRouter.get(
  "/subcategories/:id",
  expressAsyncHandler(async (req, res) => {
    const subcategories = await getSubCategories(req.params.id);
    res.send(subcategories);
  })
);

module.exports = categoryRouter;
