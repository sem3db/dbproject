const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const {addCartItem,removeCartItem,changeItemQuantity,getCartItems} = require("../models/cartModel.js");


const cartRouter = express.Router();

cartRouter.post('/',expressAsyncHandler(async (req, res) => {

    const customerID = req.params.customerID;
    const cartItems = await getCartItems(customerID);
    res.send(cartItems);
  }));


cartRouter.post('/addItem',expressAsyncHandler(async (req, res) => {

    const customerID = req.params.customerID;
    const variant = req.params.variant;
    const product = req.params.product;
    const quantity = req.params.quantity;

    const submitState = await addCartItem(customerID,variant,product,quantity);

    res.send(submitState);
  }));


  cartRouter.post('/delete',expressAsyncHandler(async (req, res) => {

    const customerID = req.params.customerID;
    const variant = req.params.variant;
    const product = req.params.product;

    const deleteState = await removeCartItem(customerID,variant,product);

    res.send(deleteState);
  }));

  cartRouter.post('/changeQuantity',expressAsyncHandler(async (req, res) => {

    const customerID = req.params.customerID;
    const variant = req.params.variant;
    const product = req.params.product;
    const newQuantity = req.params.newQuantity;

    const submitState = await changeItemQuantity(customerID,variant,product,newQuantity);

    res.send(submitState);
  }));