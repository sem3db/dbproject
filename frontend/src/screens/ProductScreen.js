import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Variant from "../components/Variant";
import { detailsProduct, detailsProductVariant } from "../action/productAction";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

  const ProductScreen = ({history, match }) => {
    const product_id=match.params.id;
    const [qty, setQty]=useState(1)
    const dispatch = useDispatch();
    const productDetails=useSelector(state=>state.productDetails)
    const {loading, error, product, variant, variants, error1} =productDetails
    console.log('lklklklklkjh')
    console.log(variant)
    console.log(productDetails)
    if(error1){
      console.log('asdasdasdsd')
    }
    useEffect(() => {
      dispatch(detailsProduct(match.params.id))
    }, [dispatch, match]);

    const addToCartHandler =()=>{
      history.push(`/cart/${match.params.id}-${variant.variantId}?qty=${qty}`)
    }
    const change=(event,data)=>{
      const y={...variant}
      y[data]=event.target.value
      dispatch(detailsProductVariant(product_id,y))
    }

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading?<Loader/>:error?<Message variant='danger' Children={error}>{error}</Message>:(
      <Row>
        <Col md={6}>
          <Image src={variant.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
        {error1?<Message variant='warning'>Selected Product is not available</Message>:''}
          <Row>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.product_name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Variant type="radio" vari={'size'} value={variant['size']} arr={variants['sizes']} Change={change}/>
            </ListGroup.Item>
            <ListGroup.Item>
            <Variant type="dropdown" vari={'color'} value={variant['color']} arr={variants['colors']} Change={change}/>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            {error1?'':<ListGroup.Item>Price: LKR {variant.price}</ListGroup.Item>}
            <ListGroup.Item>
              Description:{product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{error1?'--':`LKR ${variant.price}`}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {error1?'--':variant.noStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              {variant.noStock>0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity:</Col>
                    <Col>{error1?'--':
                    <Form.Control as='select' value={qty} onChange={(e)=>
                      setQty(e.target.value)}>
                        {
                        [...Array(variant.noStock).keys()].map((x)=>(
                          <option key={x+1} value={x+1}>{x+1}</option>
                        ))}
                      </Form.Control>
                    }
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block btn-dark"
                  type="button"
                  disabled={error1}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        </Row>
        </Col>
      </Row>
      )}
    </>
  );
};

export default ProductScreen;
