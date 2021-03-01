import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_RESET,
    PRODUCT_DETAILS_SUCCESS1,
    PRODUCT_DETAILS_FAIL1,
    PRODUCT_DETAILS_REQUEST1,
    VARIANT_LIST_REQUEST,
    VARIANT_LIST_SUCCESS,
    VARIANT_LIST_FAIL,
    VARIANT_DETAILS_REQUEST,
    VARIANT_DETAILS_SUCCESS,
    VARIANT_DETAILS_FAIL,
    VARIANT_CREATE_REQUEST,
    VARIANT_CREATE_SUCCESS,
    VARIANT_CREATE_FAIL,
    VARIANT_CREATE_RESET,
    VARIANT_UPDATE_REQUEST,
    VARIANT_UPDATE_SUCCESS,
    VARIANT_UPDATE_FAIL,
    VARIANT_UPDATE_RESET,
    VARIANT_DELETE_REQUEST,
    VARIANT_DELETE_SUCCESS,
    VARIANT_DELETE_FAIL,
    VARIANT_DELETE_RESET,
} from '../constants/productConstants'

export const productListReducer =(state={products:[]},action)=>{
    switch(action.type){
       case PRODUCT_LIST_REQUEST:
            return {loading:true, products:[]}
       case PRODUCT_LIST_SUCCESS:
           return {loading:false, products:action.payload}
       case PRODUCT_LIST_FAIL:
           return {loading:false, error: action.payload}
       default:
           return state
    }
};
   
export const productDetailsReducer =(state={product:{}, variant:{}, loading:true}, action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading:true}
        case PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading:false, 
                product:action.payload,
                variant:action.payload.Onevariant
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                loading:false, 
                error: action.payload}
        case PRODUCT_DETAILS_REQUEST1:
            return state;
        case PRODUCT_DETAILS_SUCCESS1:
            const vary = action.payload
            return {
                ...state,
                loading:false,
                product:{...state.product,...vary}
            }
        case PRODUCT_DETAILS_FAIL1:
            return {
                ...state,
                loading:false, error: action.payload}
        default:
            return state;
    }
};



export const productListReducerAdmin = (state = { loading: true, products: [] },action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};

export const productDetailsReducerAdmin = (state = { loading: true }, action) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
        return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case PRODUCT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_CREATE_RESET:
        return {};
      default:
        return state;
    }
};

export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return { loading: true };
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
   
export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_DELETE_REQUEST:
        return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_DELETE_RESET:
        return {};
      default:
        return state;
    }
};
  
export const variantListReducer =(state={ loading: true, variants: [] },action)=>{
    switch(action.type){
       case VARIANT_LIST_REQUEST:
            return {loading:true };
       case VARIANT_LIST_SUCCESS:
           return {loading:false, variants:action.payload};
       case VARIANT_LIST_FAIL:
           return {loading:false, error: action.payload};
       default:
           return state;
    }
};
   
export const variantDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case VARIANT_DETAILS_REQUEST:
        return { loading: true };
      case VARIANT_DETAILS_SUCCESS:
        return { loading: false, variant: action.payload };
      case VARIANT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};
   
export const variantCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case VARIANT_CREATE_REQUEST:
        return { loading: true };
      case VARIANT_CREATE_SUCCESS:
        return { loading: false, success: true, variant: action.payload };
      case VARIANT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case VARIANT_CREATE_RESET:
        return {};
      default:
        return state;
    }
};

export const variantUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case VARIANT_UPDATE_REQUEST:
        return { loading: true };
      case VARIANT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case VARIANT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case VARIANT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
};

export const variantDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case VARIANT_DELETE_REQUEST:
        return { loading: true };
      case VARIANT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case VARIANT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case VARIANT_DELETE_RESET:
        return {};
      default:
        return state;
    }
};
