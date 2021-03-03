import {
    ADMIN_DETAILS_FAIL,
    ADMIN_DETAILS_REQUEST,
    ADMIN_DETAILS_SUCCESS,
    ADMIN_SIGNIN_FAIL,
    ADMIN_SIGNIN_REQUEST,
    ADMIN_SIGNIN_SUCCESS,
    ADMIN_SIGNOUT,
} from '../constants/adminConstants';
  
export const adminSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_SIGNIN_REQUEST:
        return { loading: true };
        case ADMIN_SIGNIN_SUCCESS:
        return { loading: false, adminInfo: action.payload };
        case ADMIN_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
        case ADMIN_SIGNOUT:
        return {};
        default:
        return state;
    }
};

export const adminDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ADMIN_DETAILS_REQUEST:
            return { loading: true };
        case ADMIN_DETAILS_SUCCESS:
            return { loading: false, admin: action.payload };
        case ADMIN_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
