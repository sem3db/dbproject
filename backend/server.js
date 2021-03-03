const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");

const products = require("./data/products");

const bodyParser = require("body-parser");

//Import Routes
const userRouter = require("./routers/customerRouter.js");
const adminRouter = require("./routers/adminRouter");
const productRouter = require("./routers/productRouter.js");
const orderRouter = require("./routers/orderRouter");
const cartRouter = require("./routers/cartRouter.js");
const reportRouter = require("./routers/reportRouter.js");
const supplierRouter = require("./routers/supplierRouter.js");
const categoryRouter = require("./routers/categoryRouter.js");

dotenv.config();

app.use(express.urlencoded({ extended: true }));

//Middleware
app.use(express.json());

// app.get("/api/products", (req, res) => {
// res.json(products);
// });

//Route Middleware
app.use("/api/customer", userRouter);
app.use("/api/products", productRouter);
app.use("/api/admin", adminRouter);
app.use("/api/orders", orderRouter);
app.use("/api/cart", cartRouter);
app.use("/api/reports", reportRouter);
app.use("/api/suppliers", supplierRouter);
app.use("/api/categories", categoryRouter);


app.get('/api/config/paypal',(req,res)=>res.send(process.env.PAYPAL_CLIENT_ID))

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`.yellow.bold));


