const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {
  loginIn,
  register,
  findCustomerById,
  updateCustomer,
  getShippingAddress,
  updateShippingAddress,
  getMainCities,
} = require("../models/customerModel.js");
const { generateToken, isAuth } = require("../utils.js");

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const login_cred = await loginIn(req.body.email);
    if (login_cred) {
      if (await bcrypt.compare(req.body.password, login_cred[0].password)) {
        const token = generateToken({
          reg_customer_id:login_cred[0].reg_customer_id,
          email: login_cred[0].email,
          fName: login_cred[0].first_name,
        });
        
        res.send({
          first_name: login_cred[0].first_name,
          email: login_cred[0].email,
          token: token,
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Email or Password" });
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const createdUser = await register(
      req.body.email,
      hashedPassword,
      req.body.fName,
      req.body.lName,
      req.body.zipCode,
      req.body.addressLine1,
      req.body.addressLine2,
      req.body.city,
      req.body.state,
      req.body.phone
    );

    const token = generateToken({
      reg_customer_id:createdUser.customer_id,
      email: req.body.email,
      fName: req.body.fName,
    });

    res.send({
      reg_customer_id:createdUser.customer_id,
      first_name: req.body.fName,
      email: req.body.email,
      token: token,
    });
  })
);

userRouter.get(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const customer = await findCustomerById(req.user.reg_customer_id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(404).send({ message: "Customer Not Found" });
    }
  })
);

// userRouter.put(
//   "/update/:custometId",
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     const createdUser = await updateCustomer(
//       req.params.custometId,
//       hashedPassword,
//       req.body.fName,
//       req.body.lName,
//       req.body.zipCode,
//       req.body.addressLine1,
//       req.body.addressLine2,
//       req.body.city,
//       req.body.state,
//       req.body.phone
//     );
//     res.send({
//       first_name: createdUser.fName,
//       last_name: createdUser.lName,
//     });
//   })
// );


userRouter.get(
  "/shipment/info",
  isAuth,  
  expressAsyncHandler(async (req, res) => {
    const address = await getShippingAddress(req.user.reg_customer_id);
    if (address) {
      res.send(address);
    } else {
      res
        .status(404)
        .send({ message: "Customer does not have a Shipping Address." });
    }
  })
);

userRouter.get(
  "/shipment/main_cities",
  expressAsyncHandler(async (req, res) => {
    const maincitylist = await getMainCities();
    if (maincitylist) {
      res.send(maincitylist);
    } else {
      res.status(404).send({ message: "No Main Cities." });
    }
  })
);

userRouter.post(
  "/shipment/change",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    
    console.log('kkkkkkkkkkkkkkkkkkkk')
    const newaddress = await updateShippingAddress(
      
      req.user.reg_customer_id,
      req.body.postalCode,
      req.body.addressLine1,
      req.body.addressLine2,
      req.body.city,
      req.body.province,
      req.body.phone
    );

    res.send(newaddress);
  })
);

module.exports = userRouter;
