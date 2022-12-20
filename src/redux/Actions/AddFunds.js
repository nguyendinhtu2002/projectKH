import { ADDFUNDS_CREATE_FAIL, ADDFUNDS_CREATE_REQUEST, ADDFUNDS_CREATE_SUCCESS, ADDFUNDS_GETLIST_MY_FAIL, ADDFUNDS_GETLIST_MY_REQUEST, ADDFUNDS_GETLIST_MY_SUCCESS, ADDFUNDS_LIST_MY_FAIL, ADDFUNDS_LIST_MY_REQUEST, ADDFUNDS_LIST_MY_SUCCESS } from "../Constants/AddFunds";
import axios from "axios";
import { logout } from "./userAction";
export const createAddFunds = (funds) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADDFUNDS_CREATE_REQUEST });


        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`https://up-views.herokuapp.com/api/addFunds`, funds, config);
        dispatch({ type: ADDFUNDS_CREATE_SUCCESS, payload: data });
        // localStorage.setItem("listMyOrders", JSON.stringify(data));

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ADDFUNDS_CREATE_FAIL,
            payload: message,
        });
    }
};


export const AddFundsList = (access_token, phone, content) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADDFUNDS_LIST_MY_REQUEST });


        const { data } = await axios.post(`https://momosv3.apimienphi.com/api/checkTranContent`, JSON.stringify({ access_token, phone, content }));
        dispatch({ type: ADDFUNDS_LIST_MY_SUCCESS, payload: data });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ADDFUNDS_LIST_MY_FAIL,
            payload: message,
        });
    }
};

export const listMyAdsFunds = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ADDFUNDS_GETLIST_MY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`https://up-views.herokuapp.com/api/addFunds/getByUser`, config);
        dispatch({ type: ADDFUNDS_GETLIST_MY_SUCCESS, payload: data });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ADDFUNDS_GETLIST_MY_FAIL,
            payload: message,
        });
    }
};



