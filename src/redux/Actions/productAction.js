import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductContants";
import axios from "axios"
import { logout } from "./userAction";
import { URL } from "../Url";


// PRODUCT LIST
export const listProduct = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${userInfo.token}`,

        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }
        const { data } = await axios.get(`${URL}/api/products`);
        // const { data } = await axios.post("https://upview.us/api/v2",params,config);

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        console.log(message)
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: message,
        });

    }
};

export const findProduct = (type, name, service) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${userInfo.token}`,

        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }
        const { data } = await axios.get(`${URL}/api/products/find`,{type, name, service});
        // const { data } = await axios.post("https://upview.us/api/v2",params,config);

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        console.log(message)
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: message,
        });

    }
};