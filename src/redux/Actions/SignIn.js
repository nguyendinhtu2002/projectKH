import axios from "axios";
import { logout } from "./userAction"
import { URL } from "../Url";
import { SIGNIN_CREATE_FAIL, SIGNIN_CREATE_REQUEST, SIGNIN_CREATE_SUCCESS } from "../Constants/Signin";


export const ListSignIn = () => async (dispatch, getState) => {
    try {
      dispatch({ type: SIGNIN_CREATE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
  
      const { data } = await axios.get(`${URL}/api/Signin/${userInfo._id}/getByUser`, config);
      dispatch({ type: SIGNIN_CREATE_SUCCESS, payload: data });
  
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: SIGNIN_CREATE_FAIL,
        payload: message,
      });
    }
  };
  