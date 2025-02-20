import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import Message from "../components/Message"
import Loader from "../components/Loader"
import { addToCart , removeFromCart} from "../action/cartAction";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form
} from "react-bootstrap";

const CartScreen = ({match,location,history})=>{
    const Id = match.params.id?match.params.id.split('-'):[]
    const productId=Id[0]
    const variantId=Id[1]
    const qty = location.search ? Number(location.search.split('=')[1]):1
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const {cartItems} = cart
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,variantId,qty))
        }
    },[dispatch,productId,qty])

    console.log(cart)

    const removeFromCartHandler=(product_id,variant_id)=>{
        dispatch(removeFromCart(product_id,variant_id))
    }
    const checkoutHandler =()=>{
        history.push('/login?redirect=shipping')
        // history.push('/shipping')
    }

    return <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length===0 ? (<Message Children={"Your cart is empty"}>Your cart is empty<Link to='/'>Go Back</Link></Message>):(<ListGroup variant='flush'>
                {cartItems.map(item=>(
                    <ListGroup.Item key={item.product}>
                        <Row>
                            <Col md={2}>
                                <Image src={item.image} alt={item.name} fluid rounded />
                            </Col>
                            <Col md={3}>
                                <Link to={`/product/${item.product_id}`}>{item.name}</Link>
                            </Col>
                            <Col md={2}>
                                ${item.price}
                            </Col>
                            <Col md={2}>
                                <Form.Control as='select' value={item.qty} onChange={(e)=>dispatch(addToCart(item.product_id,item.variant_id,Number(e.target.value)))}>
                                    {[...Array(item.noStock).keys()].map((x)=>(
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item.product_id,item.variant_id)}>
                                    <i className='fas fa-trash'></i>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>)}
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc,item)=>acc+item.qty, 0)})items</h2>
                        LKR {cartItems.reduce((acc,item)=>acc + item.qty * item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
}
export default CartScreen;

