import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST1,
  PRODUCT_DETAILS_SUCCESS1,
  PRODUCT_DETAILS_FAIL1,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,
} from '../constants/productConstants';

import {
  VARIANT_LIST_REQUEST,
  VARIANT_LIST_SUCCESS,
  VARIANT_LIST_FAIL,
  VARIANT_DETAILS_REQUEST,
  VARIANT_DETAILS_SUCCESS,
  VARIANT_DETAILS_FAIL,
  VARIANT_CREATE_FAIL,
  VARIANT_CREATE_REQUEST,
  VARIANT_CREATE_SUCCESS,
  VARIANT_UPDATE_REQUEST,
  VARIANT_UPDATE_SUCCESS,
  VARIANT_UPDATE_FAIL,
  VARIANT_DELETE_REQUEST,
  VARIANT_DELETE_FAIL,
  VARIANT_DELETE_SUCCESS,
} from '../constants/variantConstants';

// frontend testing without backend
// const productdata = [
//   {
//     product_id: 1,
//     product_name: "p-name",
//     category_name: "AAAA",
//     subcat_name: "aaa",
//     description: "p-description",
//     weight: "p-weight",
//     dimension: "p-dimension",
//     brand: "p-brand",
//     supplier_name: "xxx",
//   },
//   {
//     product_id: 2,
//     product_name: "p-name2",
//     category_name: "BBBB",
//     subcat_name: "bbb",
//     description: "p-description2",
//     weight: "p-weight2",
//     dimension: "p-dimension2",
//     brand: "p-brand2",
//     supplier_name: "yyy",
//   },
// ];
// frontend testing without backend

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");
    console.log(data)
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listProductsCat = (cat) => async (dispatch) => {
  cat=cat.split("-").join('/')
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`/api/products/category/${cat}`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const {data} = await axios.get(`/api/products/${productId}`)

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    });
  }
};

export const detailsProductVariant = (productId, variants) => async (
  dispatch
  ) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST1, payload: productId });
  try {
    console.log(variants)
    dispatch({ type: PRODUCT_DETAILS_REQUEST1 });
    const { data } = await axios.post(`/api/products/v`, variants);
    // const data = productdata[productId-1];
    const h = { ...data, vary: variants };
    dispatch({ type: PRODUCT_DETAILS_SUCCESS1, payload: h });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCT_DETAILS_FAIL1,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};






export const listProductsAdmin = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {

    // const { data } = await axios.get(`/api/products/productlist`);
    const data = [
      {
        product_id: 1,
        product_name: "ssdsd",
        category_name: "dvsvs",
        subcat_name: "sdvsv",
        brand: "svsv",
        supplier_name: "sdvsvs",
        weight: "sdvsdvs",
        dimension: "vsdvdsv",
        description: "svsdvsd",
      }
    ]
    
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsProductAdmin = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    
    const {data} = await axios.get(`/api/products/productlist/${productId}`)
    
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  try {
    const newproduct = {
      product_name: "sampleproduct",
      category_name: null,
      subcat_name: null,
      description: "sampledescription",
      weight: "sampleweight",
      dimension: "sampledimension",
      brand: "samplebrand",
      supplier_name: null,
    };
    const { data } = await axios.post(`/api/products/addProduct`, newproduct);

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

    const { data } = await axios.post(`/api/products/productlist/edit/${product.product_id}`, product);

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

    const { data } = axios.delete(`/api/products/productlist/delete/${productId}`);

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
};

export const listVariants = (productId) => async (dispatch) =>{
  dispatch({ type: VARIANT_LIST_REQUEST });
  try {

      // const { data } = await axios.get("/api/product/productlist/${productId}/variantlist");
      const { data } = await axios.get(`/api/products/productlist/variants/${productId}`);

      dispatch({
      type: VARIANT_LIST_SUCCESS,
      payload: data,
      });
  } catch (error) {
      console.log(error);
      dispatch({
      type: VARIANT_LIST_FAIL,
      payload:
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
  }
}

export const detailsVariant = (productId,variantId) => async (dispatch) => {
  dispatch({ type: VARIANT_DETAILS_REQUEST, payload: (productId,variantId) });
  try {
    
    // const {data} = await axios.get(`/api/products/productlist/${productId}/variants/${variantId}`)
    const {data} = await axios.get(`/api/products/productlist/variants/${productId}/${variantId}`)
    
    dispatch({ type: VARIANT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VARIANT_DETAILS_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    });
  }
};

export const createVariant = (productId) => async (dispatch, getState) => {
  dispatch({ type: VARIANT_CREATE_REQUEST });
  try {
    const newvariant = {
      product_id: productId,
      SKU:"samplesku",
      price: null,
      offer: null,
      color: null,
      size: null,
      no_stock: null,
      image_url: null,
    };
    const { data } = await axios.post(`/api/products/productlist/variants/addvariant/${productId}`, newvariant);
    dispatch({
      type: VARIANT_CREATE_SUCCESS,
      payload: data.variant,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VARIANT_CREATE_FAIL, payload: message });
  }
};
export const updateVariant = (productId,variant) => async (dispatch, getState) => {
  dispatch({ type: VARIANT_UPDATE_REQUEST, payload: variant });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {

    const { data } = await axios.post(`/api/products/productlist/variants/editvariant/${productId}/${variant.variant_id}`, variant);

    dispatch({ type: VARIANT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VARIANT_UPDATE_FAIL, error: message });
  }
};
export const deleteVariant = (productId,variantId) => async (dispatch, getState) => {
  dispatch({ type: VARIANT_DELETE_REQUEST, payload: (productId,variantId) });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {

    const { data } = axios.delete(`/api/products/productlist/variants/delete/${productId}/${variantId}`);

    dispatch({ type: VARIANT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VARIANT_DELETE_FAIL, payload: message });
  }
};