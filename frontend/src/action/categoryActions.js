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
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
  SUBCATEGORY_LIST_FAIL,
} from '../constants/categoryConstants';

// frontend testing without backend
const categorydata = [
    {category_id:1,category_name:'AAAA'},
    {category_id:2,category_name:'BBBB'}
];
const subcategorydata = [
    {category_id:1,subcat_id:1,subcat_name:'aaa'},
    {category_id:1,subcat_id:2,subcat_name:'bbb'}]
// frontend testing without backend

export const listCategories = () => async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    try {

        // backend
        // const { data } = await axios.get("/api/categories/categorylist");
        // backend

        // frontend testing without backend
        const data = categorydata;
        // frontend testing without backend

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

export const listSubcategories = (categoryId) => async (dispatch) =>{
    dispatch({ type: SUBCATEGORY_LIST_REQUEST });
    try {

        // backend
        // const { data } = await axios.get("/api/${categoryId}/subcategorylist");
        // backend

        // frontend testing without backend
        const data = subcategorydata;
        // frontend testing without backend

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

export const detailsCategory = (categoryId) => async (dispatch) => {
  dispatch({ type: CATEGORY_DETAILS_REQUEST, payload: categoryId });
  try {
    dispatch({ type: CATEGORY_DETAILS_REQUEST });

    // backend
    // const {data} = await axios.get(`/api/category/${categoryId}`)
    // backend

    // frontend testing without backend
    const data = categorydata[categoryId - 1];
    // frontend testing without backend

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


export const createCategory = () => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_CREATE_REQUEST });
  try {

    // backend
    // const { data } = await axios.post(
    //   '/api/categories/',
    //   {},
    // );
    // backend

    // frontend testing without backend
    const newcategory = {
      category_id: categorydata.length + 1,
      category_name: "samplecategory",
    };
    categorydata.push(newcategory);
    const data = { category: newcategory };
    // frontend testing without backend


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

    // backend
    // const { data } = await axios.put(`/api/categories/${category.category_id}`, category);
    // backend

    // frontend testing without backend
    categorydata[category.category_id - 1] = category;
    const { data } = categorydata[category.category_id - 1];
    // frontend testing without backend

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
    
    // backend
    // const { data } = axios.delete(`/api/categories/${categoryId}`);
    // backend
    
    // frontend testing without backend
    categorydata.splice(categoryId-1,1);
    const { data } = categorydata;
    // frontend testing without backend

    dispatch({ type: CATEGORY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_DELETE_FAIL, payload: message });
  }
};
