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
  VARIANT_LIST_REQUEST,
  VARIANT_LIST_SUCCESS,
  VARIANT_LIST_FAIL,
} from '../constants/productConstants';

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
  console.log('l1')
  console.log(cat)
  console.log('l1')
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    if(cat){
    }
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

    const { data } = await axios.get("/api/productlist");

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
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    
    const {data} = await axios.get(`/api/productlist/${productId}`)
    
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
    const { data } = await axios.post("/api/addProduct", newproduct);

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

    const { data } = await axios.post(`/api/productlist/edit/${product.product_id}`, product);

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

    const { data } = axios.delete(`/productlist/delete/${productId}`);

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
};



// frontend testing without backend
// const variantdata = [
//   {
//     product_id: 1,
//     variant_id: 1,
//     SKU:"sku",
//     price: 123,
//     offer: 10,
//     color: "c",
//     size: "s",
//     no_stock: 12,
//     image_url: "a/a/a/a",
//   },
//   {
//     product_id: 1,
//     variant_id: 2,
//     SKU:"sku2",
//     price: 1234,
//     offer: 104,
//     color: "c2",
//     size: "s2",
//     no_stock: 123,
//     image_url: "a/a/a/a2",
//   }
// ]

export const listVariants = (productId) => async (dispatch) =>{
  dispatch({ type: VARIANT_LIST_REQUEST });
  try {

      // const { data } = await axios.get("/api/product/${productId}/variantlist");
      const { data } = await axios.get(`/api/productlist/variants/${productId}`);

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