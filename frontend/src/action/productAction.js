import axios from "axios";
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
} from "../constants/productConstants";

const productdata = [
  {
    _id: 1,
    product_name: "p-name",
    category_name: "cat-name",
    category_description: "cat-description",
    subcat_name: "subcat-name",
    description: "p-description",
    weight: "p-weight",
    dimension: "p-dimension",
    brand: "p-brand",
    supplier_name: "s-name",
    contact_number: "s-contact",
    email: "s-email",
    SKU: "v-sku",
    price: "v-price",
    offer: "v-offer",
    color: "v-color",
    size: "v-size",
    no_stock: "v-stock",
    image_url: "/images/p1.jpg",
  },
  {
    _id: 2,
    product_name: "p-name",
    category_name: "cat-name",
    category_description: "cat-description",
    subcat_name: "subcat-name",
    description: "p-description",
    weight: "p-weight",
    dimension: "p-dimension",
    brand: "p-brand",
    supplier_name: "s-name",
    contact_number: "s-contact",
    email: "s-email",
    SKU: "v-sku2",
    price: "v-price2",
    offer: "v-offer2",
    color: "v-color2",
    size: "v-size2",
    no_stock: "v-stock2",
    image_url: "/images/p2.jpg",
  },
];

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // const {data} = await axios.get('/api/products')
    const { data } = await axios.get("/api/products/productlist");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
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
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`/api/products/${cat}`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
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
    // const {data} = await axios.get(`/api/product/${productId}`)
    const data = productdata[productId - 1];
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
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
    // const { data } = await axios.post(
    //   '/api/products',
    //   {},
    // );
    const newproduct = {
      _id: productdata.length + 1,
      product_name: "sample-p-name",
      category_name: "sample-cat-name",
      category_description: "sample-cat-description",
      subcat_name: "sample-subcat-name",
      description: "sample-p-description",
      weight: "sample-p-weight",
      dimension: "sample-p-dimension",
      brand: "sample-p-brand",
      supplier_name: "sample-s-name",
      contact_number: "sample-s-contact",
      email: "sample-s-email",
      SKU: "sample-v-sku2",
      price: "sample-v-price2",
      offer: "sample-v-offer2",
      color: "sample-v-color2",
      size: "sample-v-size2",
      no_stock: "sample-v-stock2",
      image_url: "/images/p0.jpg",
    };
    productdata.push(newproduct);
    const data = { product: newproduct };
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
    // const { data } = await axios.put(`/api/products/${product._id}`, product);
    productdata[product._id - 1] = product;
    const { data } = productdata;
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
