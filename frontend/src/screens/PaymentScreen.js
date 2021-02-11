import React, {useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import Message from "../components/Message"
import CheckoutSteps from "../components/CheckoutSteps"
import {savePaymentMethod} from "../action/cartAction";
import {
    Col,
  Button,
  Form
} from "react-bootstrap";
import FormContainer from "../components/FormContainer";


  const PaymentScreen = ({history}) => {

    const cart = useSelector(state=>state.cart)
    const {shippingAddress} =cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [paymentMethod, setpaymentMethod] =useState('Paypal')


    const dispatch =useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod({paymentMethod}))
        history.push('/placeorder')
    }

  return (
      <FormContainer>
          <CheckoutSteps step1 step2 step3/>
          <h1>Payment Method</h1>
          <Form onSubmit={submitHandler}>
              <Form.Group>
                  <Form.Label as='legend'>Select Method</Form.Label>
             
              <Col>
              <Form.Check type='radio' label='Paypal or Credit Card' id='Paypal' name='paymentMethod' value='Paypal' checked onChange={(e)=>setpaymentMethod(e.target.value)}></Form.Check>
              <Form.Check type='radio' label='Card' id='card' name='paymentMethod' value='Card' onChange={(e)=>{}}></Form.Check>
              </Col>
              </Form.Group>
              <Button type='submit' variant='primary'>Continue</Button>
          </Form>
      </FormContainer>
  )
}
export default PaymentScreen;