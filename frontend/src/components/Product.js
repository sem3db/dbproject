import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Rating from './Rating'
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.product_id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.product_id}`}>
          <Card.Title as="div">
            <strong>{product.product_name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} review`}/>
        </Card.Text>
        <Card.Text as="h3"><strong>$</strong> {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
