import { WALLET_CREATE_FAIL, WALLET_CREATE_REQUEST, WALLET_CREATE_SUCCESS, WALLET_UPDATE_FAIL, WALLET_UPDATE_REQUEST, WALLET_UPDATE_SUCCESS } from "../Constants/WalletContants";
import axios from "axios";
import { logout } from "./userAction";
import { URL } from "../Url";

export const CreateWallet = () => async (dispatch, getState) => {
  try {

    dispatch({ type: WALLET_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
          Authorization: `Bearer ${userInfo.token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  }
    const { data } = await axios.post(`${URL}/api/Waller/${userInfo._id}`,config);
    dispatch({ type: WALLET_CREATE_SUCCESS, payload: data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: WALLET_CREATE_FAIL,
      payload: message,
    });
  }
};

// UPDATE MONEY
export const updateWallet = (money) => async (dispatch, getState) => {
  try {
    dispatch({ type: WALLET_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`${URL}/api/Waller/${userInfo._id}`, money,config);
    dispatch({ type: WALLET_UPDATE_SUCCESS, payload: data });

    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: WALLET_UPDATE_FAIL,
      payload: message,
    });
  }
};