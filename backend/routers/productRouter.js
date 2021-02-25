const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { isAuth } = require("../utils.js");
const {
  findProductById,
  getProducts,
  findProductsByCategory,
  findProductsBySubCategory,
  findVariantByParams,
  getProductsForAdmin,
  createProduct,
} = require("../models/productModel.js");

const productRouter = express.Router();

productRouter.get(
  "/",
  isAuth,
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

productRouter.post(
  "/addProduct",
  expressAsyncHandler(async (req, res) => {
    const isAdded = await createProduct(
      req.body.product_name,
      req.body.description,
      req.body.weight,
      req.body.dimension,
      req.body.brand,
      req.body.category_name,
      req.body.subcategory_name,
      req.body.supplier_name,
      req.body.variant_id,
      req.body.SKU,
      req.body.price,
      req.body.offer,
      req.body.color,
      req.body.size,
      req.body.no_stock
    );

    res.send(isAdded);
  })
);

productRouter.get(
  "/categories/:category",
  expressAsyncHandler(async (req, res) => {
    const category_products = await findProductsByCategory(req.params.category);
    if (category_products) {
      res.send(category_products);
    } else {
      res.status(404).send({ message: "Category Not Found" });
    }
  })
);

productRouter.get(
  "/categories/:category/:subcategory",
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
    } else {
      res.status(404).send({ message: "Product Not Found" });
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
