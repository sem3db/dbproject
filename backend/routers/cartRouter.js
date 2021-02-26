const express = require("express");
const expressAsyncHandler = require("express-async-handler");
//const bcrypt = require("bcryptjs");

const {addCartItem,removeCartItem,changeItemQuantity,getCartItems} = require("../models/cartModel.js");


const cartRouter = express.Router();

cartRouter.post('/',expressAsyncHandler(async (req, res) => {

    const customerID = req.params.customerID;
    
    
    if (customerID) {
        const cartItems = await getCartItems(customerID).then();
        res.send(cartItems);
    } else {
        res.status(404).send({ message: "Customer/Cart not found" });
    }    

  }));


cartRouter.post('/addItem',expressAsyncHandler(async (req, res) => {

    const customerID = req.params.customerID;
    const variant = req.params.variant;
    const product = req.params.product;
    const quantity = req.params.quantity;

    if (customerID && variant && product && quantity) {
        const submitState = await addCartItem(customerID,variant,product,quantity).then();
        res.send(submitState);
    } else {
        res.status(404).send({ message: "Invalid Request" });
    }    
  }));


  cartRouter.post('/delete',expressAsyncHandler(async (req, res) => {

    const customerID = req.params.customerID;
    const variant = req.params.variant;
    const product = req.params.product;

    if (customerID && variant && product) {
        const deleteState = await removeCartItem(customerID,variant,product).then();
        res.send(deleteState);
    } else {
        res.status(404).send({ message: "Invalid Request" });
    }    

  }));

  cartRouter.post('/changeQuantity',expressAsyncHandler(async (req, res) => {

    const customerID = req.params.customerID;
    const variant = req.params.variant;
    const product = req.params.product;
    const newQuantity = req.params.newQuantity;
    

    if (customerID && variant && product && newQuantity) {
        const submitState = await changeItemQuantity(customerID,variant,product,newQuantity).then();
        res.send(submitState);
    } else {
        res.status(404).send({ message: "Invalid Request" });
    }    
  }));


  module.exports = cartRouter;