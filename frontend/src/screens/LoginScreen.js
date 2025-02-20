import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message"
import Loader from "../components/Loader"
import {login} from "../action/userActions";
import FormContainer from "../components/FormContainer"
import {
Form,
  Row,
  Col,
  Button
} from "react-bootstrap";

const LoginScreen = ({location,history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state=>state.userLogin)
    const {loading, error, userInfo} = userLogin

    const redirect = location.search ? location.search.split('=')[1]:'/'
    console.log(redirect)
    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])
    const submitHandler =(event)=>{
        event.preventDefault()
        dispatch(login(email,password))
    }

    return (
        <>
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='email Address' value={email} onChange={(event)=>setEmail(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign In</Button>
                </Form>
                <Row className='py-3'>
                    <Col>
                    New Customer?
                    <Row className='px-3'><Col><Link to={redirect ? `/register?redirect=${redirect}`:'/register'} >Register</Link></Col></Row>
                    <Row className='px-3'><Col><Link to={redirect=='shipping' ? '/shipping':'/'} >Continue as a Guset</Link></Col></Row>
                    </Col>
                </Row>
                
        </FormContainer>
        </>
    )
}

export default LoginScreen
