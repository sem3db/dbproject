const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {
  findProductById,
  getProducts,
  findProductsByCategory,
  findProductsBySubCategory,
  findVariantByParams,
  getProductsForAdmin,
} = require("../models/productModel.js");

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await getProducts();

    res.send(products);
  })
);

productRouter.get(
  "/productlist",
  expressAsyncHandler(async (req, res) => {
    const products = await getProductsForAdmin();
    res.send(products);
  })
);

productRouter.get(
  "/category/:category",
  expressAsyncHandler(async (req, res) => {
    console.log('')
    const category_products = await findProductsByCategory(req.params.category);
    if (category_products) {
      res.send(category_products);
    } else {
      res.status(404).send({ message: "Category Not Found" });
    }
  })
);

productRouter.get(
  "/category/:category/:subcategory",
  expressAsyncHandler(async (req, res) => {
    const sub_category_products = await findProductsBySubCategory(
      req.params.category,
      req.params.subcategory
    );
    if (sub_category_products) {
      res.send(sub_category_products);
    } else {
      res.status(404).send({ message: "Sub Category Not Found" });
    }
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await findProductById(req.params.id);
    if (product) {
      res.send(product);
      console.log('ooooo')
      console.log(product)
      console.log('ooooo')
    } else {
      // throw new Error('database failed to connect');
      console.log('ooooo')
      res.status(404).send({ message: "Product Not Found" });
      console.log('ooooo')
    }
  })
);

productRouter.get(
  "/:id/:color/:size",
  expressAsyncHandler(async (req, res) => {
    const variant = await findVariantByParams(
      req.params.id,
      req.params.color,
      req.params.size
    );

    if (variant) {
      res.send(variant);
    } else {
      res.status(404).send({ message: "Variant does not exist" });
    }
  })
);

module.exports = productRouter;
