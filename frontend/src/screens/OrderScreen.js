import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import Loader from "../components/Loader"
import {Link} from "react-router-dom"
import {getOrderDetails} from '../action/orderActions'
// import { saveShippingAddress} from "../action/cartAction";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button
} from "react-bootstrap";
import Message from "../components/Message";


  const OrderScreen = ({match}) => {
  const orderId = match.params.id;
  const dispatch = useDispatch()
    

const orderDetails = useSelector(state=>state.orderDetails)
const {order,loading,error}=orderDetails
if(!loading){
    order.itemsPrice = order.cartItems.reduce((acc,item)=>acc +item.price*item.qty,0)
}

useEffect(()=>{
    dispatch(getOrderDetails(orderId))
},[dispatch,orderId])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p><strong>Name:</strong>{order.user.name}</p>
              <p><strong>Email:</strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address},{order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered?(
                  <Message variant='success'>Delivered</Message>):<Message variant='success'>Not Delivered</Message>}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
              <strong>Method:</strong>
              {order.paymentMethod}
              </p>
              <p>
              <strong>Paid On:</strong>
              {order.paidAt}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is Empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          <Row>
                            <Col className="text-left" md={2}>
                              {item.qty}
                            </Col>
                            <Col md={1}>x</Col>
                            <Col className="text-right" md={3}>
                              ${item.price}
                            </Col>
                            <Col md={1}>=</Col>
                            <Col className="text-right" md={3}>
                              ${(item.qty * item.price).toFixed(2)}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Delivery</Col>
                  <Col>${order.deliveryCost.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default OrderScreen;
