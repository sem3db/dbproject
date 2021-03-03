import axios from "axios";
import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_SUCCESS,
} from '../constants/categoryConstants';


export const listCategories = () => async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    try {

      const { data } = await axios.get(`/api/categories`);

      dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
};
  
export const detailsCategory = (categoryId) => async (dispatch) => {
  dispatch({ type: CATEGORY_DETAILS_REQUEST, payload: categoryId });
  try {
    dispatch({ type: CATEGORY_DETAILS_REQUEST });

    const {data} = await axios.get(`/api/categories/${categoryId}`)

    dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCategory = (newcategory) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_CREATE_REQUEST });
  try {
    const { data } = await axios.post('/api/categories/',newcategory);

    dispatch({
      type: CATEGORY_CREATE_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_CREATE_FAIL, payload: message });
  }
};

export const updateCategory = (category) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_UPDATE_REQUEST, payload: category });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {

    const { data } = await axios.put(`/api/categories/${category.category_id}`, category);

    dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_UPDATE_FAIL, error: message });
  }
};

export const deleteCategory = (categoryId) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_DELETE_REQUEST, payload: categoryId });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    
    const { data } = axios.delete(`/api/categories/${categoryId}`);

    dispatch({ type: CATEGORY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_DELETE_FAIL, payload: message });
  }
};
