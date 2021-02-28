const express = require("express");

const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { loginIn, register } = require("../models/adminModel");
const { generateToken } = require("../utils.js");

const adminRouter = express.Router();

adminRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const login_cred = await loginIn(req.body.email);
    if (login_cred) {
      if (await bcrypt.compare(req.body.password, login_cred[0].password)) {
        res.send({
          user_name: login_cred[0].user_name,
          email: login_cred[0].email_address,
          //token: generateToken(login_cred[0]),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Email or Password" });
  })
);

adminRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const createdAdmin = await register(
      req.body.email,
      hashedPassword,
      req.body.user_name,
      req.body.role,
      req.body.last_login
    );

    res.send({
      createdAdmin,
    });
  })
);

module.exports = adminRouter;
