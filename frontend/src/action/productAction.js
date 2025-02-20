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


export const detailsProductVariant = (productId, variants) => async (dispatch) => {
  try{
    const { data } = await axios.get(`/api/products/${productId}/${variants.color}/${variants.size}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS1, payload: data });
    console.log('lllllllllll')
  }
  catch(error){
    dispatch({
            type: PRODUCT_DETAILS_FAIL1,
            payload:variants
          });
  }
}


// export const detailsProductVariant = (productId, variants) => async (dispatch) => {

//   dispatch({ type: PRODUCT_DETAILS_REQUEST1, payload: productId });
//   try {
//     console.log(variants)
//     dispatch({ type: PRODUCT_DETAILS_REQUEST1 });
//     const { data } = await axios.get(`/api/products/${productId}/${variants.color}/${variants.size}`);
//     const h = { ...data, vary: variants };
//     dispatch({ type: PRODUCT_DETAILS_SUCCESS1, payload: h });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL1,
//       payload:error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };






export const listProductsAdmin = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  const { adminSignin:{adminInfo}} = getState();
  try {

    const { data } = await axios.get(`/api/products/productlist`, 
    {
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );
    
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

export const detailsProductAdmin = (productId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  const { adminSignin:{adminInfo}} = getState();
  try {
    
    const {data} = await axios.get(`/api/products/productlist/${productId}`, {
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data[0] });
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

export const createProduct = (newproduct) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  const { adminSignin:{adminInfo}} = getState();
  try {

    const { data } = await axios.post(`/api/products/addProduct`,newproduct,{
        headers:{ Authorization: `Bearer ${adminInfo.token}`}
      }
    );

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, error: message });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
  const { adminSignin:{adminInfo}} = getState();
  try {

    const { data } = await axios.put(`/api/products/productlist/edit/${product.product_id}`, product,{
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

    dispatch({ 
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data
    });
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
  const { adminSignin:{adminInfo}} = getState();
  try {

    const { data } = axios.delete(`/api/products/productlist/delete/${productId}`,{},{
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
};

export const listVariants = (productId) => async (dispatch, getState) =>{
  dispatch({ type: VARIANT_LIST_REQUEST });
  const { adminSignin:{adminInfo}} = getState();
  try {

      // const { data } = await axios.get("/api/product/productlist/${productId}/variantlist");
      const { data } = await axios.get(`/api/products/productlist/${productId}/variants`, {
        headers:{ Authorization: `Bearer ${adminInfo.token}`}
      }
      );

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

export const detailsVariant = (productId,variantId) => async (dispatch, getState) => {
  dispatch({ type: VARIANT_DETAILS_REQUEST, payload: (productId,variantId) });
  const { adminSignin:{adminInfo}} = getState();
  try {
    
    // const {data} = await axios.get(`/api/products/productlist/${productId}/variants/${variantId}`)
    const {data} = await axios.get(`/api/products/productlist/${productId}/variants/${variantId}`,{
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    )

    dispatch({ type: VARIANT_DETAILS_SUCCESS, payload: data[0] });
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

export const createVariant = (productId,newvariant) => async (dispatch, getState) => {
  dispatch({ type: VARIANT_CREATE_REQUEST });
  const { adminSignin:{adminInfo}} = getState();
  try {
    const { data } = await axios.post(`/api/products/productlist/${productId}/variants/addvariant`, newvariant, {
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );
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
export const updateVariant = (variant) => async (dispatch, getState) => {
  dispatch({ type: VARIANT_UPDATE_REQUEST, payload: variant });
  const { adminSignin:{adminInfo}} = getState();
  try {
    const { data } = await axios.put(`/api/products/productlist/${variant.product_id}/variants/editvariant/${variant.variant_id}`, variant, {
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

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
  const { adminSignin:{adminInfo}} = getState();
  try {

    const { data } = axios.delete(`/api/products/productlist/${productId}/variants/delete/${variantId}`,{},{
      headers:{ Authorization: `Bearer ${adminInfo.token}`}
    }
    );

    dispatch({ type: VARIANT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VARIANT_DELETE_FAIL, payload: message });
  }
};