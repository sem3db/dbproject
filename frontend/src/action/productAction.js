import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_SUCCESS,
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) =>{
  try{
      dispatch({type:PRODUCT_LIST_REQUEST})
      // const {data} = await axios.get('/api/products')
      const data = [{ _id: 1,
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      { _id: 2,
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      }];
      dispatch({
          type:PRODUCT_LIST_SUCCESS,
          payload:data
      })
  }
  catch(error){
      console.log(error)
      dispatch({
          type:PRODUCT_LIST_FAIL,
          payload : error.response && error.response.data.message ? error.response.data.message: error.message
      })
  }
}

export const listProductsCat = (cat) => async (dispatch) =>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data} = await axios.get(`/api/products/${cat}`)
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }
    catch(error){
        console.log(error)
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message: error.message
        })
    }
}
export const listProductDetails = (id) => async (dispatch) =>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/product/${id}`)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        console.log(error)
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message: error.message
        })
    }
}

export const createProduct = () => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    try {
      const { data } = await axios.post(
        '/api/products',
        {},
      );
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
    }
  };
  export const updateProduct = (product) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
    // const {
    //   userSignin: { userInfo },
    // } = getState();
    try {
      const { data } = await axios.put(`/api/products/${product._id}`, product);
      dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
    }
  };
  export const deleteProduct = (productId) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    // const {
    //   userSignin: { userInfo },
    // } = getState();
    try {
      const { data } = axios.delete(`/api/products/${productId}`);
      dispatch({ type: PRODUCT_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
    }
  };
