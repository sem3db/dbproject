import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, NavDropdown , Nav} from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message"
import Loader from "../components/Loader"
import {LinkContainer} from 'react-router-bootstrap'
import { listProductsCat } from "../action/productAction";

const HomeScreen = ({match}) => {
  const dispatch = useDispatch();
  const cat = match.params.cat ? match.params.cat:" "
  const productList=useSelector(state=>state.productList)
  const {loading, error, products} =productList
  console.log(products)
  useEffect(() => {
    if(cat){
      dispatch(listProductsCat(cat))
    }
  }, [dispatch,cat])

  return (
    <>
      <Row>
        <Col md={2}>

        <div className="card">
        <div className="card-body">
          <h5 className="card-title">Product type</h5>
          <LinkContainer to="/products/camera">
                <Nav.Link className="btn btn">Camera<span class="badge badge-pill badge-light float-right">120</span></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products/phone">
                <Nav.Link className="btn btn">Phone<span class="badge badge-pill badge-light float-right">120</span></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products/laptop">
                <Nav.Link className="btn btn">Laptop<span class="badge badge-pill badge-light float-right">120</span></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products/watch">
                <Nav.Link className="btn btn">Watch<span class="badge badge-pill badge-light float-right">120</span></Nav.Link>
              </LinkContainer>
        </div>
      </div>

        </Col>
        <Col md={10}>
        {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" Children={error} />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
        </Col>
      </Row>
      <h1>Latest Products</h1>
      
    </>
  );
};

export default HomeScreen;
