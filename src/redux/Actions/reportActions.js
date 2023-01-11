import { MESSAGE_DETAILS_LIST_MY_FAIL, MESSAGE_DETAILS_LIST_MY_REQUEST, MESSAGE_DETAILS_LIST_MY_SUCCESS, MESSAGE_LIST_MY_FAIL, MESSAGE_LIST_MY_REQUEST, MESSAGE_LIST_MY_SUCCESS, REPORT_CREATE_FAIL, REPORT_CREATE_REQUEST, REPORT_CREATE_SUCCESS } from "../Constants/ReportContans";
import axios from "axios";
import {logout} from "./userAction"

export const report = (reportOrder) => async (dispatch, getState) => {
    try {
        dispatch({ type: REPORT_CREATE_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,

            },
        };
        const { data } = await axios.post(
            'http://139.180.146.136/api/report',
            reportOrder,
            config)
        dispatch({ type: REPORT_CREATE_SUCCESS, payload: data })


    } catch (error) {
        dispatch({
            type: REPORT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}


export const listMyMessage = () => async (dispatch, getState) => {
    try {
        dispatch({ type: MESSAGE_LIST_MY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`http://139.180.146.136/api/report/getByUser`, config);
        dispatch({ type: MESSAGE_LIST_MY_SUCCESS, payload: data });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: MESSAGE_LIST_MY_FAIL,
            payload: message,
        });
    }
};

export const messagelistDetailMessage = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: MESSAGE_DETAILS_LIST_MY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`http://139.180.146.136/api/report/${id}`, config);
        dispatch({ type: MESSAGE_DETAILS_LIST_MY_SUCCESS, payload: data });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: MESSAGE_DETAILS_LIST_MY_FAIL,
            payload: message,
        });
    }
};