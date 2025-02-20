import Axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_MINE_LIST_REQUEST,
  ORDER_MINE_LIST_FAIL,
  ORDER_MINE_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
} from "../constants/orderConstants";

// export const createOrder = (order) => async (dispatch, getState) => {
//   dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
//   try {
//     // const {
//     //   userSignin: { userInfo },
//     // } = getState();
//     const { data } = await Axios.post('/api/orders', order);
//     dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
//     dispatch({ type: CART_EMPTY });
//     localStorage.removeItem('cartItems');
//   } catch (error) {
//     dispatch({
//       type: ORDER_CREATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    const {userLogin: { userInfo },} = getState();
    const config = {
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${userInfo.token}`
      }
    };
    const { data } = await Axios.post("/api/orders/placeorder/registered", order, config);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const guestcreateOrder = (order) => async (dispatch, getState) => {
  console.log('llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    const { data } = await Axios.post("/api/orders/placeorder/guest", order);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getOrderDetails = (orderId) => async (dispatch, getState) => {
  try {
  dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
  const {userLogin: { userInfo },} = getState();
  const config={
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${userInfo.token}`
    }
  }
    const {data } = await Axios.get(`/api/orders/orderdetail/${orderId}`,config);
    console.log(data)
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message});
  }
};

// export const detailsOrder = (orderId) => async (dispatch, getState) => {
//   dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
//   // const {
//   //   userSignin: { userInfo },
//   // } = getState();
//   try {
//     const { data } = await Axios.get(`/api/orders/${orderId}`);
//     dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
//   }
// };

export const payOrder = (order_id, paymentResult) => async (dispatch,getState) => {
  dispatch({ type: ORDER_PAY_REQUEST,});
  try {
    const {userLogin: { userInfo },} = getState();
    const config={
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${userInfo.token}`
      }
    }
    const { data } = await Axios.put(`/api/orders/${order_id}/pay`, paymentResult);
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_PAY_FAIL, payload: message });
  }
};


export const listOrderMine = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_MINE_LIST_REQUEST });
  const {userLogin: { userInfo },} = getState();
  console.log('ppppppppppppppsssssssssssssssppppppppppppp')
  console.log(userInfo.token)
  try {
    const config={
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${userInfo.token}`
      }
    }
    const { data } = await Axios.get("/api/orders/list",config);
    console.log(data)
    dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
  }
};



export const listOrders = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_LIST_REQUEST });
  const { adminSignin:{adminInfo}} = getState();
  try {

    const { data } = await Axios.get('/api/orders/', {
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_LIST_FAIL, payload: message });
  }
};

  
export const deliverOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DELIVER_REQUEST, payload: orderId });
  const { adminSignin:{adminInfo}} = getState();
  try {
    const { data } = Axios.put(
      `/api/orders/setDeliverStatus/${orderId}`,
      {},{
        headers:{ Authorization: `Bearer ${adminInfo.token}`}
      }
    );

    dispatch({ type: ORDER_DELIVER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DELIVER_FAIL, payload: message });
  }
};
