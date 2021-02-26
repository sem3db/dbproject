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
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAIL,
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
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    const config = {
      // headers:{
      //   'Content-Type':'application/json'
      //   Authorization:`Bearer` ${userInfo.token}
      // }
    };
    const { data } = await Axios.post("/api/orders", order, config);
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
  // const {
  //   userLogin: { userInfo },
  // } = getState();
  const config={
    // header:{
    //   Authorization:`Bearer ${userInfo.token}`,
    // },
  }
  
    const { data } = await Axios.get(`/api/orders/${orderId}`,config);
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

export const payOrder = (order, paymentResult) => async (
  dispatch,
  getState
) => {
  dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    const { data } = Axios.put(`/api/orders/${order._id}/pay`, paymentResult);
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
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    const { data } = await Axios.get("/api/orders/mine");
    dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
  }
};

// frontend testing without backend
// const orderdata = [
//   { order_id: 1,
//     user: 'Danuka',
//     createdAt: '2020/01/01 asd',
//     total_payment: 1000,
//     paidAt: '2020/01/02 asd',
//     delivery_status: true,
//     deliveredAt: '2020/02/03 asd',
//   },
//   { order_id: 2,
//     user: 'Sandaruwan',
//     createdAt: '2021/01/01 asd',
//     total_payment: 2000,
//     paidAt: '2021/01/02 asd',
//     delivery_status: false,
//     deliveredAt: '',
//   },
// ];
// frontend testing without backend

export const listOrders = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_LIST_REQUEST });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {

    // backend
    const { data } = await Axios.get('/api/orders');
    // backend

    // frontend testing without backend
    // const data = orderdata;
    // frontend testing without backend

    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_LIST_FAIL, payload: message });
  }
};

export const deleteOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DELETE_REQUEST, payload: orderId });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    const { data } = Axios.delete(`/api/orders/${orderId}`);
    dispatch({ type: ORDER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DELETE_FAIL, payload: message });
  }
};
  
export const deliverOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DELIVER_REQUEST, payload: orderId });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {

    // backend
    const { data } = Axios.put(
      `/api/orders/${orderId}/deliver`,
      {}
    );
    // backend

    // frontend testing without backend
    // const order = orderdata[orderId-1];
    // order.delivery_status = true;
    // order.deliveredAt = '2020/02/22 asd';
    // const data = order; 
    // console.log(data);
    // frontend testing without backend

    dispatch({ type: ORDER_DELIVER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DELIVER_FAIL, payload: message });
  }
};
