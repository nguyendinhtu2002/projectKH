import { SIGNIN_CREATE_FAIL, SIGNIN_CREATE_REQUEST, SIGNIN_CREATE_SUCCESS } from "../Constants/Signin";

export const SigninCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNIN_CREATE_REQUEST:
            return { loading: true };
        case SIGNIN_CREATE_SUCCESS:
            return { loading: false, success: true, Signin: action.payload };
        case SIGNIN_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};