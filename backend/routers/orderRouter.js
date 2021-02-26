const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const orderRouter = express.Router();

const { getOrders } = require("../models/orderModel.js");

orderRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const orders = await getOrders();

    res.send(orders);
  })
);

orderRouter.post("/placeorder/registered",expressAsyncHandler(async (req, res) => {

        const customerID = req.params.customerID;
        const paymethod = req.params.paymethod;
        const delstat = req.params.delstat;
        const delmethod = req.params.delmethod;
        const estim = req.params.estim;
        const note = req.params.note;

        if (customerID && paymethod && delstat && delmethod && estim) {
            const orderState = await moveToOrder_registered(cust_id,paymethod,delstat,delmethod,estim,note).then();
            res.send(orderState);
        } else {
            res.status(404).send({ message: "Invalid Request" });
        }    
    })
);

orderRouter.post("/placeorder/guest",expressAsyncHandler(async (req, res) => {

        const customerID = req.params.customerID;
        const paymethod = req.params.paymethod;
        const delstat = req.params.delstat;
        const delmethod = req.params.delmethod;
        const estim = req.params.estim;
        const note = req.params.note;
        const productlist = req.params.productlist;

        if (customerID && paymethod && delstat && delmethod && estim && productlist) {
            const orderState = await moveToOrder_registered(cust_id,paymethod,delstat,delmethod,estim,note,productlist).then();
            res.send(orderState);
        } else {
            res.status(404).send({ message: "Invalid Request" });
      }  
    })
);

module.exports = orderRouter;
