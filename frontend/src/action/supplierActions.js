import axios from "axios";
import {
  SUPPLIER_LIST_REQUEST,
  SUPPLIER_LIST_SUCCESS,
  SUPPLIER_LIST_FAIL,
  SUPPLIER_DETAILS_REQUEST,
  SUPPLIER_DETAILS_SUCCESS,
  SUPPLIER_DETAILS_FAIL,
  SUPPLIER_CREATE_FAIL,
  SUPPLIER_CREATE_REQUEST,
  SUPPLIER_CREATE_SUCCESS,
  SUPPLIER_UPDATE_REQUEST,
  SUPPLIER_UPDATE_SUCCESS,
  SUPPLIER_UPDATE_FAIL,
  SUPPLIER_DELETE_REQUEST,
  SUPPLIER_DELETE_FAIL,
  SUPPLIER_DELETE_SUCCESS,
} from '../constants/supplierConstants';


export const listSuppliers = () => async (dispatch) => {
    dispatch({ type: SUPPLIER_LIST_REQUEST });
    try {

      const { data } = await axios.get(`/api/suppliers/`);

      dispatch({
      type: SUPPLIER_LIST_SUCCESS,
      payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
      type: SUPPLIER_LIST_FAIL,
      payload:
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
};
  
export const detailsSupplier = (supplierId) => async (dispatch) => {
  dispatch({ type: SUPPLIER_DETAILS_REQUEST, payload: supplierId });
  try {
    dispatch({ type: SUPPLIER_DETAILS_REQUEST });

    const {data} = await axios.get(`/api/suppliers/${supplierId}`)

    dispatch({ type: SUPPLIER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SUPPLIER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSupplier = () => async (dispatch, getState) => {
  dispatch({ type: SUPPLIER_CREATE_REQUEST });
  try {

    const newsupplier = {
        supplier_name: "samplesupplier",
        contact_number: null,
        email: null,
    };
    const { data } = await axios.post('/api/suppliers/',newsupplier);


    dispatch({
      type: SUPPLIER_CREATE_SUCCESS,
      payload: data.supplier,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUPPLIER_CREATE_FAIL, payload: message });
  }
};

export const updateSupplier = (supplier) => async (dispatch, getState) => {
  dispatch({ type: SUPPLIER_UPDATE_REQUEST, payload: supplier });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {

    const { data } = await axios.put(`/api/suppliers/${supplier.supplier_id}`, supplier);

    dispatch({ type: SUPPLIER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUPPLIER_UPDATE_FAIL, error: message });
  }
};

export const deleteSupplier = (supplierId) => async (dispatch, getState) => {
  dispatch({ type: SUPPLIER_DELETE_REQUEST, payload: supplierId });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    
    const { data } = axios.delete(`/api/suppliers/${supplierId}`);

    dispatch({ type: SUPPLIER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUPPLIER_DELETE_FAIL, payload: message });
  }
};