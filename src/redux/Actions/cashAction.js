import { CASHFLOW_CREATE_FAIL, CASHFLOW_CREATE_REQUEST, CASHFLOW_CREATE_SUCCESS, CASHFLOW_LIST_MY_FAIL, CASHFLOW_LIST_MY_REQUEST, CASHFLOW_LIST_MY_SUCCESS, CASHFLOW_MONEY_FAIL, CASHFLOW_MONEY_REQUEST, CASHFLOW_MONEY_SUCCESS } from "../Constants/CashFlowContants";
import { logout } from "./userAction"
import axios from "axios";
export const createCashFlow = (order) => async (dispatch, getState) => {
  try {

    dispatch({ type: CASHFLOW_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`http://localhost:5000/api/cashFlow`, order, config);

    dispatch({ type: CASHFLOW_CREATE_SUCCESS, payload: data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CASHFLOW_CREATE_FAIL,
      payload: message,
    });
  }
};

export const listCashFlow = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CASHFLOW_LIST_MY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };


    const { data } = await axios.get(`http://localhost:5000/api/cashFlow`, config);
    dispatch({ type: CASHFLOW_LIST_MY_SUCCESS, payload: data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CASHFLOW_LIST_MY_FAIL,
      payload: message,
    });
  }
};
export const getMoney = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CASHFLOW_MONEY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`http://localhost:5000/api/cashFlow/getByUserDeposit`, config);
    dispatch({ type: CASHFLOW_MONEY_SUCCESS, payload: data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CASHFLOW_MONEY_FAIL,
      payload: message,
    });
  }
};
