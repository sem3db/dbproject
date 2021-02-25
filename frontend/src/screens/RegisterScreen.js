import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message"
import Loader from "../components/Loader"
import {register} from "../action/userActions";
import FormContainer from "../components/FormContainer"
import {
Form,
  Row,
  Col,
  Button
} from "react-bootstrap";

const RegisterScreen = ({location,history}) => {
    const [first_name, setFirstName] = useState('')
    const [email, setEmail] = useState('')
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
            dispatch(register(email,password,first_name))
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
                <Form.Group controlId='first_name'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='first_name' placeholder='First Name' value={first_name} onChange={(event)=>setFirstName(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='email Address' value={email} onChange={(event)=>setEmail(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmpassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='confirm password' value={confirmpassword} onChange={(event)=>setConfirmPassword(event.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Register</Button>
                </Form>
                <Row className='py-3'>
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
