import axios from 'axios'
import {
    ADMIN_DETAILS_FAIL,
    ADMIN_DETAILS_REQUEST,
    ADMIN_DETAILS_SUCCESS,
    ADMIN_SIGNIN_FAIL,
    ADMIN_SIGNIN_REQUEST,
    ADMIN_SIGNIN_SUCCESS,
    ADMIN_SIGNOUT,
} from '../constants/adminConstants'

export const signin = (email, password) => async(dispatch) => {
    dispatch({type:ADMIN_SIGNIN_REQUEST, payload: { email, password }});
    try{
        const {data} =await axios.post('/api/admin/signin',{email,password})
        // console.log(data)
        dispatch({
            type:ADMIN_SIGNIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('adminInfo',JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type:ADMIN_SIGNIN_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}

export const signout= () =>(dispatch)=>{
    localStorage.removeItem('adminInfo');
    dispatch({type:ADMIN_SIGNOUT});
}

export const getAdminDetails = ()=>async(dispatch,getState)=>{
    dispatch({type:ADMIN_DETAILS_REQUEST})
    try{
        const {adminSignin:{adminInfo}}=getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${adminInfo.token}`
            }
        }
        const {data} =await axios.post(`/api/admin/details`,config)
        // console.log(data)
        dispatch({
            type:ADMIN_DETAILS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ADMIN_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}