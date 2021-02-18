const express =require('express');
const expressAsyncHandler =require('express-async-handler');
const bcrypt =require('bcryptjs');
const{findProductById,getProducts,findProductsByCategory,findVariants} =require( '../models/productModel.js');

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await getProducts();
    res.send(products);
  })
);

productRouter.get(
  '/categories/:category',
  expressAsyncHandler(async (req, res) => {
    const category_products = await findProductsByCategory(req.params.category);
    if (category_products) {
      res.send(category_products);
    } else {
      res.status(404).send({ message: 'Category Not Found' });
    }
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await findProductById(req.params.id);
    const variants=await findVariants(req.params.id);
    if (product) {
      res.send({
        Product:product,
        Variants:variants
      });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);


module.exports = productRouter;
