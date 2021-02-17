import React from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps"
import {Link} from "react-router-dom"
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


  const PlaceOrderScreen = () => {

    const cart = useSelector(state=>state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc,item)=>acc +item.price*item.qty,0)
    cart.deliveryCost = cart.itemsPrice>100?0:cart.itemsPrice>50?cart.itemsPrice*0.05:10
    cart.taxPrice =Number((0.15*cart.itemsPrice).toFixed(2))
    cart.totalPrice=Number(cart.itemsPrice)+Number(cart.deliveryCost)+Number(cart.taxPrice)

    const PlaceOrderHandler=()=>{
        console.log('')
    }

  return (
    <>
    <CheckoutSteps step1 step2 step3 step4/>
    <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Address:</strong>
                        {cart.shippingAddress.address},{cart.shippingAddress.city}{' '}
                        {cart.shippingAddress.postalCode},{' '}
                        {cart.shippingAddress.country}
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <strong>Method:</strong>
                    {cart.paymentMethod}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>Order Items</h2>
                    {cart.cartItems.length===0?<Message>Your Cart is Empty</Message>:
                    (
                        <ListGroup variant='flush'>
                            {cart.cartItems.map((item,index)=>(
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={4}>
                                            <Row>
                                                <Col className='text-left' md={2}>{item.qty}</Col>
                                                <Col md={1}>x</Col>
                                                <Col className='text-right' md={3}>${item.price}</Col>
                                                <Col md={1}>=</Col>
                                                <Col className='text-right' md={3}>${(item.qty * item.price).toFixed(2)}</Col>
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
                                                <ListGroup variant='flush'>
                                                    <ListGroup.Item>
                                                        <h2>Order Summary</h2>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col>Items</Col>
                                                            <Col>${cart.itemsPrice.toFixed(2)}</Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col>Delivery</Col>
                                                            <Col>${cart.deliveryCost.toFixed(2)}</Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                <ListGroup.Item>
                                                        <Row>
                                                            <Col>Tax</Col>
                                                            <Col>${cart.taxPrice.toFixed(2)}</Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Total</Col>
                                                        <Col>${cart.totalPrice.toFixed(2)}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Button type='button' className='btn-block' disabled={cart.cartItems===0} onClick={PlaceOrderHandler}>Place Order</Button>
                                                </ListGroup.Item>
                                                </ListGroup>
                                            </Card>
                                        </Col>
    </Row>
</>
  )
}
export default PlaceOrderScreen;
