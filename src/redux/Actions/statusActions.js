import axios from "axios";
import { Status_CREATE_FAIL, Status_CREATE_REQUEST, Status_CREATE_SUCCESS } from "../Constants/StatusContants";
// require('dotenv').config()
// STATUS LIST
export const listStatus = (id) => async (dispatch) => {
    try {

        dispatch({ type: Status_CREATE_REQUEST });

        const { data } = await axios.put(`http://139.180.146.136/api/orders/${id}/status`);
        dispatch({ type: Status_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: Status_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};