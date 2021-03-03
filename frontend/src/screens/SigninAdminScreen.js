import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message"
import Loader from "../components/Loader"
import FormContainer from "../components/FormContainer"
import {
Form,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { signin } from "../action/adminActions";


export default function SigninAdminScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const adminSignin = useSelector(state =>state.adminSignin);
    const {adminInfo, loading, error} =adminSignin;

    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(adminInfo){
            props.history.push(`/orderlist`);
        }
    },[adminInfo, props.history])
    
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(signin(email,password));
    }

    return (
        <>
        <FormContainer>
            <h1>Admin Sign In</h1>
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
        </FormContainer>
        </>
    )
}