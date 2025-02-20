const express = require("express");
const expressAsyncHandler = require("express-async-handler");

const {
  addCartItem,
  removeCartItem,
  changeItemQuantity,
  getCartItems,
} = require("../models/cartModel.js");
const { isAuth } = require("../utils.js");

const cartRouter = express.Router();

cartRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const customerID = req.user.reg_customer_id;

    if (customerID) {
      const cartItems = await getCartItems(customerID).then();
      res.send(cartItems);
    } else {
      res
        .status(404)
        .send({ message: `Customer/Cart not found : ${customerID}` });
    }
  })
);

cartRouter.post(
  "/addItem",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const customerID = req.user.reg_customer_id;
    const variant = req.body.variant_id;
    const product = req.body.product_id;
    const quantity = req.body.qty;

    if (customerID && variant && product && quantity) {
      const submitState = await addCartItem(
        customerID,
        variant,
        product,
        quantity
      ).then();
      res.send(submitState);
    } else {
      res.status(404).send({ message: "Invalid Request" });
    }
  })
);

cartRouter.post(
  "/delete",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const customerID = req.user.reg_customer_id;
    const variant = req.body.variant_id;
    const product = req.body.product_id;

    if (customerID && variant && product) {
      const deleteState = await removeCartItem(
        customerID,
        variant,
        product
      ).then();
      res.send(deleteState);
    } else {
      res.status(404).send({ message: "Invalid Request" });
    }
  })
);

cartRouter.post(
  "/changeQuantity",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const customerID = req.user.reg_customer_id;
    const variant = req.body.variant;
    const product = req.body.product;
    const newQuantity = req.body.newQuantity;

    if (customerID && variant && product && newQuantity) {
      const submitState = await changeItemQuantity(
        customerID,
        variant,
        product,
        newQuantity
      ).then();
      res.send(submitState);
    } else {
      res.status(404).send({ message: "Invalid Request" });
    }
  })
);

module.exports = cartRouter;
