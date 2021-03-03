import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps"
import {saveDeliveryDetails} from "../action/cartAction";
import {Col,Button,Form, Row} from "react-bootstrap";
import FormContainer from "../components/FormContainer";


  const PaymentScreen = ({history}) => {

    const cart = useSelector(state=>state.cart)
    const {shippingAddress} =cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [paymentMethod, setpaymentMethod] =useState('Paypal')
    const [deliveryMethod, setdeliverytMethod] =useState('Postal')


    const dispatch =useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(deliveryMethod)
        dispatch(saveDeliveryDetails({paymentMethod,deliveryMethod}))
        history.push('/placeorder')
    }

  return (
      <FormContainer>
          <CheckoutSteps step1 step2 step3/>
          <h1>Order Details</h1>
          <Form onSubmit={submitHandler}>
              <Form.Group>
                  <Form.Label as='legend'>Select Method</Form.Label>
              <Row>
              <Form.Check className='pr-5' type='radio' label='Paypal or Credit Card' id='Paypal' name='paymentMethod' value='Paypal' checked onChange={(e)=>setpaymentMethod(e.target.value)}></Form.Check>
              <Form.Check className='pl-5' type='radio' label='Cash On Delivery' id='cash' name='paymentMethod' value='Card' onChange={(e)=>{}}></Form.Check>
              </Row>
              </Form.Group>
              <Form.Group>
                  <Form.Label as='h4'>Delivery Option</Form.Label>
              <Row>
              <Form.Check className='pr-5' type='radio' label='Postal' id='Postal' name='deliveryMethod' value='Postal' checked onChange={(e)=>setdeliverytMethod(e.target.value)}></Form.Check>
              <Form.Check className='px-5' type='radio' label='Courier' id='courier' name='deliveryMethod' value='courier' onChange={(e)=>setdeliverytMethod(e.target.value)}></Form.Check>
              <Form.Check className='pl-5' type='radio' label='In Store Pickup' id='pickup' name='deliveryMethod' value='pickup' onChange={(e)=>setdeliverytMethod(e.target.value)}></Form.Check>
              </Row>
              </Form.Group>
              <Button type='submit' variant='primary'>Continue</Button>
          </Form>
      </FormContainer>
  )
}
export default PaymentScreen;