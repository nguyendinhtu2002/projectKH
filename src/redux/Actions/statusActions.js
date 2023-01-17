import axios from "axios";
import { Status_CREATE_FAIL, Status_CREATE_REQUEST, Status_CREATE_SUCCESS } from "../Constants/StatusContants";
// require('dotenv').config()
// STATUS LIST
import { URL } from "../Url";

export const listStatus = (id) => async (dispatch) => {
    try {
        console.log(id)
        
        dispatch({ type: Status_CREATE_REQUEST });

        const { data } = await axios.put(`${URL}/api/orders/${id}/status`);
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