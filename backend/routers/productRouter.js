const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {
  findProductById,
  getProducts,
  findProductsByCategory,
  findProductsBySubCategory,
  findVariantByParams,
  findVariantByIds,
  getProductForUpdate,
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

// product update form ---------------------------------
productRouter.get(
  "/productlist/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await getProductForUpdate(req.params.id);
    res.send(product);
  })
);

productRouter.post(
  "/addProduct",
  expressAsyncHandler(async (req, res) => {
    const product = await createProduct(
      req.body.product_name,
      req.body.description,
      req.body.weight,
      req.body.dimension,
      req.body.brand,
      req.body.category_name,
      req.body.subcat_name,
      req.body.supplier_name
    );

    res.send(product);
  })
);

productRouter.put(
  "/productlist/edit/:id",
  expressAsyncHandler(async (req, res) => {
    const a = req.product;
    const isEdited = await updateProduct(
      req.params.id,
      req.body.description,
      req.body.weight,
      req.body.dimension,
      req.body.brand,
      req.body.category_name,
      req.body.subcat_name,
      req.body.supplier_name
    );

    res.send(isEdited);
  })
);

productRouter.delete(
  "/productlist/delete/:id",
  expressAsyncHandler(async (req, res) => {
    const isdeleted = await deleteProduct(req.params.id);
    res.send(isdeleted);
  })
);

productRouter.get(
  "/productlist/:id/variants",
  expressAsyncHandler(async (req, res) => {
    const variants = await findVariantsById(req.params.id);
    res.send(variants);
  })
);

productRouter.get(
  "/productlist/:id/variants/:vid",
  expressAsyncHandler(async (req, res) => {
    const variantDetails = await getVariant(req.params.id, req.params.vid);
    res.send(variantDetails);
  })
);

productRouter.post(
  "/productlist/:id/variants/addvariant",
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

productRouter.put(
  "/productlist/:id/variants/editvariant/:vid",
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

productRouter.delete(
  "/productlist/:id/variants/delete/:vid",
  expressAsyncHandler(async (req, res) => {
    const isdeleted = await deleteVariant(req.params.id, req.params.vid);
    res.send(isdeleted);
  })
);

productRouter.get(
  "/category/:category",
  expressAsyncHandler(async (req, res) => {
    console.log("");
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

productRouter.get(
  "/:productId/:variantId",
  expressAsyncHandler(async (req, res) => {
    const variant = await findVariantByIds(
      req.params.productId,
      req.params.variantId
    );

    if (variant) {
      res.send(variant);
    } else {
      res.status(404).send({ message: "Variant does not exist" });
    }
  })
);

module.exports = productRouter;
