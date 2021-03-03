import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from '../constants/cartConstants'

export const cartReducer =(state={cartItems:[], shippingAddress:{}},action)=>{
    switch(action.type){
       case CART_ADD_ITEM:
           const item = action.payload
           console.log('item')
           console.log(item)
           const existItem =state.cartItems.find(x=>((x.product_id === item.product_id) && (x.variant_id === item.variant_id)))
        //    console.log(existItem.variant_id)
        //    console.log(item.variant_id)
        //    console.log(existItem.product_id === item.product_id)
        //    console.log(existItem.variant_id === item.variant_id)
        //    console.log(existItem)
           console.log('existitem')
           if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x=>(x.product_id === existItem.product_id && x.variant_id === item.variant_id) ? item : x),
                }
           }else{
               return{
                   ...state,
                   cartItems: [...state.cartItems, item]
               }
           }
        case CART_REMOVE_ITEM:
            // console.log(state.cartItems)
            // console.log(action.payload)
            // console.log(action.payload.variant_id)
            return{
                ...state,
                cartItems:state.cartItems.filter(x=>!(x.product_id == action.payload.product_id && x.variant_id == action.payload.variant_id))
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress: action.payload,
            }
        case CART_SAVE_PAYMENT_METHOD:
            return{
                ...state,
                paymentMethod: action.payload,
            }
       default:
           return state
    }
   }