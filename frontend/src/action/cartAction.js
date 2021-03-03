import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM,CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD} from '../constants/cartConstants'


export const addToCart=(product_id,variant_id,qty) => async (dispatch,getState)=>{
    const {data}=await axios.get(`/api/products/${product_id}/${variant_id}`)
    console.log('data from proid/variid')
    console.log(data)
    const {userLogin:{userInfo}}=getState()
    if(userInfo){
        console.log(getState().userLogin)
        // const {userLogin:{userInfo}}=getState()
        const config={
        headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${userInfo.token}`
            }
        }
    }
    const cart={product:product_id, variant:variant_id, quantity:qty, customerID:5}
    console.log(cart)
    const customerID=5
    // const {data1} =await axios.post('/api/cart/addItem',{product_id, variant_id, qty, customerID},config)


    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product_id:data.product_id,
            variant_id:data.variantId,
            name:data.product_name,
            image:data.image,
            price:data.price,
            noStock:data.noStock,
            qty
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}



// export const addToCart = (product_id,variant_id,qty)=>async(dispatch,getState)=>{
//     try{
//         dispatch({
//             type:CART_ADD_ITEM_REQUEST
//         })
//         const {userLogin:{userInfo}}=getState()
//         const config={
//             headers:{
//                 'Content-Type':'application/json',
//                 Authorization:`Bearer ${userInfo.token}`
//             }
//         }
//         const cart={product_id,variant_id,qty}
//         const {data} =await axios.put(`/api/cart/addItem`,cart,config)
//         dispatch({
//             type:CART_ADD_ITEM_SUCCESS,
//             payload:data
//         })
//     }
//     catch(error){
//         dispatch({
//             type:CART_ADD_ITEM_FAIL,
//             payload:error.response && error.response.data.message ? error.response.data.message : error.message
//         })
//     }
// }

export const removeFromCart= (product_id,variant_id)=>(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:{product_id,variant_id},
    })
    if(getState().userLogin){
        console.log('dfdfdf')
    }
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress= (data)=>async(dispatch,getState)=>{
    console.log(data)
    if(getState().userLogin){
        const {userLogin:{userInfo}}=getState()
        const config={
        headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data1} =await axios.post('/api/customer/5/shipment',data)
    }
    dispatch({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:data,
    })
    localStorage.setItem('shippingAddress',JSON.stringify(data))
}

export const savePaymentMethod= (data)=>(dispatch)=>{
    dispatch({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:data,
    })
    localStorage.setItem('paymentMethod',JSON.stringify(data))
}
