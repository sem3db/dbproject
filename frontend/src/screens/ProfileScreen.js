import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message"
import Loader from "../components/Loader"
import {getUserDetails,updateUserProfile} from "../action/userActions";
import {
Form,
  Row,
  Col,
  Button
} from "react-bootstrap";

const ProfileScreen = ({location,history}) => {
    const [first_name, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state=>state.userDetails)
    const {loading, error, user} = userDetails
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile = useSelector(state=>state.userUpdateProfile)
    const {success} = userUpdateProfile

    useEffect(()=>{
        if(!userInfo){
            history.push('/login')
        }
        else{
            console.log(user)
            if(!user.first){
                dispatch(getUserDetails('profile'))
            }
            else{
                setFirstName(user.first_name)
                setEmail(user.email)
            }

        }
    },[dispatch, history, userInfo, user])
    const submitHandler =(event)=>{
        event.preventDefault()
        if(password!==confirmpassword){
            setMessage('Password do not match')
        }
        else{
            dispatch(updateUserProfile({id:user._id, first_name, email, password}))
        }
    }

    return (
        <Row>
            <Col md={3}>
            <h2>User Profile</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Profile Updated</Message>}
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
                <Button type='submit' variant='primary'>Update</Button>
                </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
     
        </Row>
    )
}

export default ProfileScreen
