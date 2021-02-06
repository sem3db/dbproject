const mysql = require("mysql");
const bodyParser = require("body-parser");
const colors = require('colors')
const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");
const mysqlConnection = require("./config/db");
dotenv.config();
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/api/products", (req, res) => {
    // res.status(401)
    // res.statusText="llllllllll"
    // res.statusMessage='email already used';
    // throw new Error('Some error')
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`.yellow.bold));
