import {USER_ADDRESS_FAIL, USER_ADDRESS_REQUEST, USER_ADDRESS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS} from '../constants/userConstants'
import axios from 'axios'
export const login = (email, password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data} =await axios.post('/api/customer/signin',{email,password},config)
        console.log('bnbn')
        console.log(data)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout=()=>async(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
}

export const register = (email, password, fName,lName,zipCode,addressLine1,addressLine2,city,state,phone)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data} =await axios.post('/api/customer/register',{email,password, fName,lName,zipCode,addressLine1,addressLine2,city,state,phone},config)
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getUserDetails = (id)=>async(dispatch,getState)=>{
    try{
        
        dispatch({
            type:USER_DETAILS_REQUEST
        })
        console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvv')
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} =await axios.get(`/api/customer/profile`,config)
        console.log(data)
        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data
        })
        
    }
    catch(error){
        dispatch({
            type:USER_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateUserProfile = (user)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} =await axios.put(`/api/customer/profile`,user,config)
        dispatch({
            type:USER_UPDATE_PROFILE_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:USER_UPDATE_PROFILE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getUserAddress = (id)=>async(dispatch,getState)=>{
    try{
        
        dispatch({
            type:USER_ADDRESS_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooooo')
        let {data} =await axios.get(`/api/customer/shipment/info`,config)
        data=data.Customer
        data={addressLine1: data.address_line_1, addressLine2: data.address_line_2, zip: data.zip_code ,phone: data.phone, city: data.city, province: data.state}
        console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooooo')
        console.log(data)
        dispatch({
            type:USER_ADDRESS_SUCCESS,
            payload:data
        })
        
    }
    catch(error){
        dispatch({
            type:USER_ADDRESS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
