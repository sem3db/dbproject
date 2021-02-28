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
  createProduct,
  updateProduct,
  deleteProduct,
  getVariant,
  findVariantsById,
  addVariant,
  updateVariant,
  deleteVariant,
} = require("../models/productModel.js");
const { isAuth } = require("../utils.js");

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

productRouter.get(
  "/productlist/variants/:id",
  expressAsyncHandler(async (req, res) => {
    const variants = await findVariantsById(req.params.id);
    console.log(req.params.id);
    res.send(variants);
  })
);

// productRouter.get(
//   "/productlist/variants/:id",
//   expressAsyncHandler(async (req, res) => {
//     const variants = await findVariantsById(req.params.id);
//     console.log(req.params.id);
//     res.send(variants);
//   })
// );

productRouter.post(
  "/productlist/variants/addvariant/:id",
  expressAsyncHandler(async (req, res) => {
    const isAdded = await addVariant(
      req.params.id,
      req.body.variant_id,
      req.body.SKU,
      req.body.image_url,
      req.body.price,
      req.body.offer,
      req.body.color,
      req.body.size,
      req.body.no_stock
    );

    res.send(isAdded);
  })
);

productRouter.post(
  "/productlist/variants/editvariant/:id/:vid",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const isEdited = await updateVariant(
      req.params.id,
      req.params.vid,
      req.body.SKU,
      req.body.image_url,
      req.body.price,
      req.body.offer,
      req.body.color,
      req.body.size,
      req.body.no_stock
    );
    res.send(isEdited);
  })
);

productRouter.get(
  "/productlist/variants/delete/:id/:vid",
  expressAsyncHandler(async (req, res) => {
    const isdeleted = await deleteVariant(req.params.id, req.params.vid);
    res.send(isdeleted);
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

productRouter.post(
  "/productlist/edit/:id",
  expressAsyncHandler(async (req, res) => {
    const isEdited = await updateProduct(
      req.params.id,
      req.body.description,
      req.body.weight,
      req.body.dimension,
      req.body.brand
    );

    res.send(isEdited);
  })
);

productRouter.get(
  "/productlist/delete/:id",
  expressAsyncHandler(async (req, res) => {
    const isdeleted = await deleteProduct(req.params.id);
    res.send(isdeleted);
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
