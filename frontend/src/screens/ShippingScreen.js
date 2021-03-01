import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps"
import { saveShippingAddress} from "../action/cartAction";
import {getUserAddress} from '../action/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Typeahead } from 'react-bootstrap-typeahead'
import {
  Button,
  Form
} from "react-bootstrap";
import FormContainer from "../components/FormContainer";


  const ShippingScreen = ({history}) => {
    const cart = useSelector(state=>state.cart)
    const {shippingAddress} =cart
    const [addressLine1, setAddressLine1] =useState(shippingAddress.addressLine1)
    const [addressLine2, setAddressLine2] =useState(shippingAddress.addressLine2)
    const [postalCode, setPostalCode] =useState(shippingAddress.postalCode)
    const [city, setCity] = useState(shippingAddress.city?shippingAddress.city:[]);
    const [province, setProvince] = useState(shippingAddress.province?shippingAddress.province:[]);
    const [phone, setPhone] =useState(shippingAddress.phone)

    const dispatch =useDispatch()

    const userAddress= useSelector(state=>state.userAddress)
    const {loading, error, address} = userAddress

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=>{
        if(!userInfo){
            history.push('/login')
        }
        else{
            console.log(address)
            if(!address.addressLine1){
                dispatch(getUserAddress('profile'))
            }
            else{
                setAddressLine1(address.addressLine1!=""?address.addressLine1:addressLine1)
                setAddressLine2(address.addressLine2!=address.addressLine2?address.addressLine2:addressLine2)
                setPostalCode(address.zip!=""?address.zip:postalCode)
                setCity(address.city!=""?address.city:city)
                setProvince(address.province!=""?address.province:province)
                setPhone(address.phone!=""?address.phone:phone)
            }
        }
    },[dispatch, history, userInfo, address])

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(city)
        dispatch(saveShippingAddress({addressLine1,addressLine2,city,postalCode,province}))
        history.push('/payment')
    }

    const cities=['Negombo', 'Colombo','Gampaha']
    const provinces=['Western','Southern','Central','Uva','Eastern','Sabaragamuwa','North','North Western','North Central']

  return (
      <FormContainer>
          <CheckoutSteps step1 step2/>
          <h2>Delivery Details</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='phone'>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type='tel' required placeholder='Contact Number' value={phone} onChange={(e)=>setPhone(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId='addressLine1'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type='text' required placeholder='Enter Address Line1' value={addressLine1} onChange={(e)=>setAddressLine1(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId='addressLine2'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type='text' required placeholder='Enter Address Line2' value={addressLine2} onChange={(e)=>setAddressLine2(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId='city'>
                  <Form.Label>City</Form.Label>
                  {/* <Form.Control type='text' required placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)}></Form.Control> */}
                  <Typeahead onChange={setCity} options={cities} placeholder="Choose a City..." selected={city}/>
              </Form.Group>
              <Form.Group controlId='postalCode'>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type='text' required placeholder='Enter Postal Code' value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId='province'>
                  <Form.Label>Province</Form.Label>
                  {/* <Form.Control type='text' required placeholder='Enter Country' value={country} onChange={(e)=>setCountry(e.target.value)}></Form.Control> */}
                  <Typeahead onChange={setProvince} options={provinces} placeholder="Choose a province..." selected={province}/>
              </Form.Group>
              {/* <Typeahead onChange={setSelected} options={['yu']} placeholder="Choose a state..." selected={selected}/> */}
              <Button type='submit' variant='primary'>Continue</Button>
          </Form>
      </FormContainer>
  )
}
export default ShippingScreen;