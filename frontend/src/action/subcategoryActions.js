import axios from "axios";
import {
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
  SUBCATEGORY_LIST_FAIL,
  SUBCATEGORY_DETAILS_REQUEST,
  SUBCATEGORY_DETAILS_SUCCESS,
  SUBCATEGORY_DETAILS_FAIL,
  SUBCATEGORY_CREATE_FAIL,
  SUBCATEGORY_CREATE_REQUEST,
  SUBCATEGORY_CREATE_SUCCESS,
  SUBCATEGORY_UPDATE_REQUEST,
  SUBCATEGORY_UPDATE_SUCCESS,
  SUBCATEGORY_UPDATE_FAIL,
  SUBCATEGORY_DELETE_REQUEST,
  SUBCATEGORY_DELETE_FAIL,
  SUBCATEGORY_DELETE_SUCCESS,
} from '../constants/subcategoryConstants';


export const listSubcategories = (categoryId) => async (dispatch, getState) =>{
    dispatch({ type: SUBCATEGORY_LIST_REQUEST });
    const { adminSignin:{adminInfo}} = getState();
    try {
      // const { data } = await axios.get("/api/categories/${categoryId}/subcategorylist");
      const { data } = await axios.get(`/api/categories/${categoryId}/subcategories`,{
        headers:{ Authorization: `Bearer ${adminInfo.token}`}
      }
      );

      dispatch({
      type: SUBCATEGORY_LIST_SUCCESS,
      payload: data,
      });
    } catch (error) {
        console.log(error);
        dispatch({
        type: SUBCATEGORY_LIST_FAIL,
        payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
  }
  
export const detailsSubcategory = (categoryId,subcategoryId) => async (dispatch, getState) => {
  dispatch({ type: SUBCATEGORY_DETAILS_REQUEST, payload: (categoryId,subcategoryId) });
  const { adminSignin:{adminInfo}} = getState();
  try {
    dispatch({ type: SUBCATEGORY_DETAILS_REQUEST });

    const {data} = await axios.get(`/api/categories/${categoryId}/subcategories/${subcategoryId}`,{
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

    dispatch({ type: SUBCATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SUBCATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSubcategory = (categoryId,newsubcategory) => async (dispatch, getState) => {
  dispatch({ type: SUBCATEGORY_CREATE_REQUEST });
  const { adminSignin:{adminInfo}} = getState();
  try {

    const { data } = await axios.post(`/api/categories/${categoryId}/subcategories/`,newsubcategory,{
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );


    dispatch({
      type: SUBCATEGORY_CREATE_SUCCESS,
      payload: data.subcategory,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUBCATEGORY_CREATE_FAIL, payload: message });
  }
};

export const updateSubcategory = (categoryId,subcategory) => async (dispatch, getState) => {
  dispatch({ type: SUBCATEGORY_UPDATE_REQUEST, payload: subcategory });
  const { adminSignin:{adminInfo}} = getState();

  try {

    const { data } = await axios.put(`/api/categories/${categoryId}/subcategories/${subcategory.subcategory_id}`, subcategory,{
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

    dispatch({ type: SUBCATEGORY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUBCATEGORY_UPDATE_FAIL, error: message });
  }
};

export const deleteSubcategory = (categoryId,subcategoryId) => async (dispatch, getState) => {
  dispatch({ type: SUBCATEGORY_DELETE_REQUEST, payload: (categoryId,subcategoryId) });
  const { adminSignin:{adminInfo}} = getState();

  try {
    
    const { data } = axios.delete(`/api/categories/${categoryId}/subcategories/${subcategoryId}`,{
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

    dispatch({ type: SUBCATEGORY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUBCATEGORY_DELETE_FAIL, payload: message });
  }
};
