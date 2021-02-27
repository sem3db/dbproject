import React, {useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import Message from "../components/Message"
import Loader from "../components/Loader"
import Variant from "../components/Variant"
import { detailsProduct, detailsProductVariant } from "../action/productAction";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form
} from "react-bootstrap";


  const ProductScreen = ({history, match }) => {
    const [qty, setQty]=useState(1)
    const dispatch = useDispatch();
    const productDetails=useSelector(state=>state.productDetails)
    const {loading, error, product} =productDetails
    console.log(product)

    useEffect(() => {
      dispatch(detailsProduct(match.params.id))
    }, [dispatch, match]);

    const addToCartHandler =()=>{
      history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    const change=(event,data)=>{
      const y={...product.vary}
      y[data]=event.target.value
      dispatch(detailsProductVariant(2,y))
    }
    const varinatKeys=Object.keys(product.variants?product.variants:{})

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading?<Loader/>:error?<Message variant='danger' Children={error}>{error}</Message>:(
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.product_name}</h3>
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <Variant type="radio" vari={varinatKeys[0]} value={product.vary[varinatKeys[0]]} arr={product.variants && product.variants[varinatKeys[0]]?product.variants.size:[]} Change={change}/>
            </ListGroup.Item>
            <ListGroup.Item>
            <Variant type="dropdown" vari={varinatKeys[1]} value={product.vary[varinatKeys[1]]} arr={product.variants && product.variants[varinatKeys[1]]?product.variants.color:[]} Change={change}/>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: LKR {product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: LKR {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>LKR {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.noStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.noStock>0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                    <Form.Control as='select' value={qty} onChange={(e)=>
                    setQty(e.target.value)}>
                      {
                      [...Array(product.noStock).keys()].map((x)=>(
                        <option key={x+1} value={x+1}>{x+1}</option>
                      ))}
                    </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block btn-dark"
                  type="button"
                  disabled={product.noStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}
    </>
  );
};

export default ProductScreen;
