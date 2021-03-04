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
const {order,loading,error,orderItems}=orderDetails
if(!loading){
    order.itemsPrice = orderItems.reduce((acc,item)=>acc +item.price*item.qty,0)
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
      <h1>Order {order.order_id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/* <h2>Shipping</h2>
              <p><strong>Name:</strong>{order.user.name}</p>
              <p><strong>Email:</strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address},{order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered?(
                  <Message variant='success'>Delivered</Message>):<Message variant='success'>Not Delivered</Message>} */}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Details</h2>
              <p className='pl-5'>
              <strong>Payment Method : </strong>
              {order.payment_method}
              </p>
              <p className='pl-5'>
              <strong>Order Created On : </strong>
              {order.order_date.substring(0,10)}
              </p>
              <p className='pl-5'>
              <strong>Delivery Estimate : </strong>
              {order.delivery_estimate.substring(0,10)}
              </p>
              <p className='pl-5'>
              <strong>Delivery Status : </strong>
              {order.delivery_status}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {orderItems.length === 0 ? (
                <Message>Order is Empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            // src={item.image}
                            alt={item.product_name}
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
                              {item.quantity}
                            </Col>
                            <Col md={1}>x</Col>
                            <Col className="text-right" md={3}>
                              LKR {item.product_price}
                            </Col>
                            <Col md={1}>=</Col>
                            <Col className="text-right" md={3}>
                              LKR {(item.quantity * item.product_price).toFixed(2)}
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
                  <Col>LKR {order.total_payment.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Delivery</Col>
                  <Col>0</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>0</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>LKR {order.total_payment.toFixed(2)}</Col>
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
