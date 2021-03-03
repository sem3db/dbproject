const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { isAuth } = require("../utils.js");
const {
  getCategories,
  getSubCategories,
} = require("../models/categoryModel.js");

const categoryRouter = express.Router();

categoryRouter.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const categories = await getCategories();
    res.send(categories);
  })
);
categoryRouter.get(
  "/:id/subcategories",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const subcategories = await getSubCategories(req.params.id);
    res.send(subcategories);
  })
);

module.exports = categoryRouter;
