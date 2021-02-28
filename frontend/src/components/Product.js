import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Rating from './Rating'
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.product_id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body className="p-0">
        <Link to={`/product/${product.product_id}`}>
          <Card.Title as="div">
            <strong><center>{product.product_name}</center></strong>
          </Card.Title>
        </Link>
          <Row className='p-0'>
            <Col md={6}>
            <Card.Text className='p-0' as="h5"><strong>$</strong> {product.price}</Card.Text>
            </Col>
            <Col className='p-0' md={6}>
            <Rating value={product.rating} size={'xs'}/>
            </Col>
          </Row>
        
      </Card.Body>
    </Card>
  );
};

export default Product;
