const express =require('express');
const dotenv=require('dotenv');
const colors = require('colors')

const userRouter=require( './routers/customerRouter.js');
const bodyParser = require('body-parser');
const productRouter=require('./routers/productRouter.js');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================USE THIS FORMAT TO RETRIVE PRODUCT DATA ===========================================
// /api/products -> PRODUCT OVERVIEW (MOST DEMANDED, LATEST PRODUCTS)
// /api/products(category) -> PRODUCTS OF PARTICULAR category
// /api/product/id -> PARTICULAR PRODUCT DETAILS

// const products = require("./data/products");
// app.get("/", (req, res) => {
//   res.send("API is running");
// });
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// app.get("/api/product/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });
// =================================================================================================================
app.use('/api/customer', userRouter);
app.use('/api/products', productRouter);


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`.yellow.bold));