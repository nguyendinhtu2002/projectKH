import axios from "axios";
import { VOUCHER_UPDATE_FAIL, VOUCHER_UPDATE_REQUEST, VOUCHER_UPDATE_SUCCESS } from "../Constants/Voucher";
import { logout } from "./userAction";
import { URL } from "../Url";

export const updateVoucher = (nameVoucher) => async (dispatch, getState) => {
    try {
      dispatch({ type: VOUCHER_UPDATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(`${URL}/api/voucher/edit`, nameVoucher, config);
      dispatch({ type: VOUCHER_UPDATE_SUCCESS, payload: data });
 
  
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: VOUCHER_UPDATE_FAIL,
        payload: message,
      });
    }
  }