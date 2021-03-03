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
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')


    const dispatch =useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(deliveryMethod)
        dispatch(saveDeliveryDetails({paymentMethod,deliveryMethod,first_name,last_name,email}))
        history.push('/placeorder')
    }

  return (
      <FormContainer>
          <CheckoutSteps step1 step2 step3/>
          <h1>Order Details</h1>
          <Form onSubmit={submitHandler}>
          <Row>
                    <Col className='pr-1'>
                        <Form.Group controlId='first_name'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='first_name' placeholder='First Name' value={first_name} onChange={(event)=>setFirstName(event.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className='pl-1'>
                        <Form.Group controlId='last_name'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='last_name' placeholder='Last Name' value={last_name} onChange={(event)=>setLastName(event.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='email Address' value={email} onChange={(event)=>setEmail(event.target.value)}></Form.Control>
                </Form.Group>
              <Form.Group>
                  <Form.Label as='legend'>Select Payment Method</Form.Label>
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