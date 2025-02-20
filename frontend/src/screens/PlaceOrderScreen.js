import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import {ORDER_PAY_RESET} from '../constants/orderConstants'
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link } from "react-router-dom";
import { createOrder, guestcreateOrder } from "../action/orderActions";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";

const PlaceOrderScreen = ({ history }) => {
  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector(state =>state.userLogin);
  const {userInfo} =userLogin;

  const cart = useSelector((state) => state.cart);

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,0);
  cart.deliveryCost =
    cart.itemsPrice > 100
      ? 0
      : cart.itemsPrice > 50
      ? cart.itemsPrice * 0.05
      : 10;
  cart.deliveryCost=0
  cart.taxPrice = Number((0 * cart.itemsPrice).toFixed(2));
  cart.totalPrice =
    (Number(cart.itemsPrice) + Number(cart.deliveryCost) + Number(cart.taxPrice))*0.1;

  const cities=['Gampaha','Ja-Ela','Colombo','Kaluthara','Kurunagala','Anuradhapura','Jaffna','Galle','Mathara','Chilaw','Puttlam','Kandy','Kegalle','Panadura','Mannar']

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;
  const g = cart.cartItems.find(x=> x.noStock==0)

  useEffect(() => {
      const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    
    console.log('kjkjkjk')
    console.log(typeof g)
    // console.log(cart.cartItems.map(({product_id,variant_id, qty})=>({product_id,variant_id, qty})))
    if(success){
      history.push(`/`)
    }else if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, [dispatch, order, success]);



  //   if (successPay) {
  //       dispatch({type:ORDER_PAY_RESET})
  //       history.push(`/cart`)
  //     // dispatch(getOrderDetails(order._id))
  //   } else if (!window.paypal) {
  //     addPayPalScript();
  //   } else {
  //     setSdkReady(true);
  //   }
  //   // else if
  //   // if(success){
  //   //     history.push(`/order/${order._id}`)
  //   // }
  // }, [dispatch, order, successPay]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    console.log('gggggggggggggggggooooooooooooooooooooooooooodddddddddddddddddddddd')
    if(userInfo){
      dispatch(
        createOrder({
          deliveryMethod:cart.orderDetails.deliveryMethod,
          paymentMethod: cart.orderDetails.paymentMethod,
          // itemsPrice: cart.itemsPrice,
          // shippingPrice: cart.shippingPrice,
          // taxPrice: cart.taxPrice,
          // totalPrice: cart.totalPrice,
          delstat:'No'
        })
      );
    }
    else{
      console.log('unreg')
      dispatch(
        guestcreateOrder({
          deliveryMethod:cart.orderDetails.deliveryMethod,
          paymentMethod: cart.orderDetails.paymentMethod,
          delstat:'No',
          note:' ',
          productlist:cart.cartItems.map(({product_id,variant_id, qty})=>({product_id,variant_id, qty})),

          email:cart.orderDetails.email,
          phone:cart.shippingAddress.phone,
          first_name:cart.orderDetails.first_name,
          last_name:cart.orderDetails.last_name,
          zip_code:cart.shippingAddress.postalCode,
          address_line_1:cart.shippingAddress.addressLine1,
          address_line_2:cart.shippingAddress.addressLine2,
          city:cart.shippingAddress.city,
          state:cart.shippingAddress.province,
          
        })
      )
    }

      
  };

//   const PlaceOrderHandler = () => {
//     dispatch(
//       createOrder({
//         orderItems: cart.cartItems,
//         shippingAddress: cart.shippingAddress,
//         paymentMethod: cart.paymentMethod,
//         itemsPrice: cart.itemsPrice,
//         shippingPrice: cart.shippingPrice,
//         taxPrice: cart.taxPrice,
//         totalPrice: cart.totalPrice,
//       })
//     );
//   };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p className='pl-3'>
                <strong>Address: </strong>
                {cart.shippingAddress.addressLine1},{" "}{cart.shippingAddress.addressLine2},{" "}{cart.shippingAddress.city},{" "}{cart.shippingAddress.province},{" "}
                {cart.shippingAddress.postalCode}.
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <div className='pl-3'>
              <strong>Payment Method : </strong>
              {cart.orderDetails.paymentMethod}</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 className='pb-0'>Estimated Deilivery</h2>
              <div className='pl-3'>
              <strong>Delivery Option : </strong>
              {cart.orderDetails.deliveryMethod}<br></br>
              <strong>Estimated Delivery Date : </strong>
              {(cities.includes(cart.shippingAddress.city) && (typeof g === 'undefined'))?'5 Days From Order Date':(cities.includes(cart.shippingAddress.city))?'8 Days From Order Date':(typeof g === 'undefined')?'7 Days From Order Date':'10 Days From Order Date'}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your Cart is Empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
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
              <ListGroup>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup>
              <ListGroup.Item>
                {cart.orderDetails.paymentMethod=="CashOnDelivery"?<Button type='button' className='btn-block' disabled={cart.cartItems===0} onClick={successPaymentHandler}>Place Order</Button>:(<>
                
                
                {/* <Button type='button' className='btn-block' disabled={cart.cartItems===0} onClick={PlaceOrderHandler}>Place Order</Button> */}
                {loadingPay && <Loader />}
                {!sdkReady ? (
                  <Loader />
                ) : (<PayPalButton amount="0.01" onSuccess={successPaymentHandler}/>)}
                </>)}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default PlaceOrderScreen;
