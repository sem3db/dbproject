import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message"
import Loader from "../components/Loader"
import {register} from "../action/userActions";
import FormContainer from "../components/FormContainer"
import {
    Dropdown,
Form,
  Row,
  Col,
  Button
} from "react-bootstrap";

const RegisterScreen = ({location,history}) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [province, setProvince] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [zip, setZip] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state=>state.userRegister)
    const {loading, error, userInfo} = userRegister

    const redirect = location.search ? location.search.split('=')[1]:'/'

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])
    const submitHandler =(event)=>{
        event.preventDefault()
        if(password!==confirmpassword){
            setMessage('Password do not match')
        }
        else{
            dispatch(register(email,password,first_name, last_name, zip, addressLine1, addressLine2, city, province, phone))
        }
    }

    return (
        <>
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
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
                
                <Row>
                    <Col className='pr-1' md={4}>
                        <Form.Group controlId='phone'>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type='tel' placeholder='Phone Number' value={phone} onChange={(event)=>setPhone(event.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className='pl-1' md={8}>
                        <Form.Group controlId='addressLine1'>
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control type='text' placeholder='Address Line 1' value={addressLine1} onChange={(event)=>setAddressLine1(event.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='pr-1' md={8}>
                    <Form.Group controlId='addressLine2'>
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control type='text' placeholder='Address Line 2' value={addressLine2} onChange={(event)=>setAddressLine2(event.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className='pl-1' md={4}>
                        
                    </Col>
                </Row>
                <Row>
                    <Col className='pr-1' md={5}>
                        <Form.Group controlId='province'>
                        <Form.Label>Province</Form.Label>
                        <Form.Control type='text' placeholder='Province' value={province} onChange={(event)=>setProvince(event.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className='px-1' md={4}>
                        <Form.Group controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder='City' value={city} onChange={(event)=>setCity(event.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className='pl-1' md={3}>
                        <Form.Group controlId='zip'>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type='text' placeholder='Zip' value={zip} onChange={(event)=>setZip(event.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)} required></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmpassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='confirm password' value={confirmpassword} onChange={(event)=>setConfirmPassword(event.target.value)}></Form.Control>
                </Form.Group>
               
                <Button type='submit' variant='primary' block>Register</Button>
                </Form>
                <Row className='py-3 text-right'>
                    <Col>
                    Have an Account?
                    <Link to={redirect ? `/login?redirect=${redirect}`:'/login'} >Login</Link>
                    </Col>
                </Row>
        </FormContainer>
        </>
    )
}
export default RegisterScreen
