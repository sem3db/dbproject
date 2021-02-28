import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducer,
  productDetailsReducer,
  productCreateReducer,
  productDeleteReducer,
  productUpdateReducer,
  variantListReducer,
} from './reducers/productreducers'

import {cartReducer} from './reducers/cartreducers'
import {userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userreducers'

import {
  orderCreateReducer,
  orderDeleteReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderMineListReducer,
  orderPayReducer,
} from "./reducers/orderReducers";
import {
  categoryListReducer,
  categoryDetailsReducer,
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryUpdateReducer,
  subcategoryListReducer,
} from "./reducers/categoryReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  variantList: variantListReducer,
  // variantDetails: variantDetailsReducer,
  // variantCreate: variantCreateReducer,
  // variantUpdate: variantUpdateReducer,
  // variantDelete: variantDeleteReducer,
  categoryList: categoryListReducer,
  categoryDetails: categoryDetailsReducer,
  categoryCreate: categoryCreateReducer,
  categoryUpdate: categoryUpdateReducer,
  categoryDelete: categoryDeleteReducer,
  subcategoryList: subcategoryListReducer,
  // subcategoryDetails: subcategoryDetailsReducer,
  // subcategoryCreate: subcategoryCreateReducer,
  // subcategoryUpdate: subcategoryUpdateReducer,
  // subcategoryDelete: subcategoryDeleteReducer,
  // supplierList: supplierListReducer,
  // supplierDetails: supplierDetailsReducer,
  // supplierCreate: supplierCreateReducer,
  // supplierUpdate: supplierUpdateReducer,
  // supplierDelete: supplierDeleteReducer,
  cart:cartReducer,
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
  userDetails:userDetailsReducer,
  userUpdateProfile:userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{}

const initialState = {
  cart:{cartItems:cartItemsFromStorage, 
    shippingAddress:shippingAddressFromStorage},
  userLogin:{userInfo:userInfoFromStorage}
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
