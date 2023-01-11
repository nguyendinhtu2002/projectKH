import { ORDER_CREATE_FAIL, ORDER_CREATE_FAIL_TO_ME, ORDER_CREATE_REQUEST, ORDER_CREATE_REQUEST_TO_ME, ORDER_CREATE_SUCCESS, ORDER_CREATE_SUCCESS_TO_ME, ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS } from "../Constants/OrderContants";
import axios from "axios";
import { CART_CLEAR_ITEMS } from "../Constants/CartContants";
import { logout } from "./userAction"
// CREATE ORDER TO API 1DG
export const createOrder = (service, link, quantity) => async (dispatch) => {
  try {
    const params = new URLSearchParams()

    params.append('key', process.env.REACT_APP_KEY1)
    params.append('action', 'add')
    params.append('service', service)
    params.append('link', link)
    params.append('quantity', quantity)

    dispatch({ type: ORDER_CREATE_REQUEST });


    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const { data } = await axios.post(`https://upview.us/api/v2`, params, config);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });

    localStorage.setItem("ordersInfo", JSON.stringify(data));

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    });
  }
};

// CREATE ORDER TO API ME
export const createOrderAPIMe = (cash) => async (dispatch, getState) => {
  try {


    dispatch({ type: ORDER_CREATE_REQUEST_TO_ME });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`http://localhost:5000/api/orders`, cash, config);

    dispatch({ type: ORDER_CREATE_SUCCESS_TO_ME, payload: data });
    dispatch({ type: CART_CLEAR_ITEMS, payload: data });
    localStorage.setItem("ordersInfo", JSON.stringify(data.orderItems));
    localStorage.removeItem("cartItems")

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_CREATE_FAIL_TO_ME,
      payload: message,
    });
  }
};


// USER ORDERS
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };


    const { data } = await axios.get(`http://localhost:5000/api/orders/${userInfo._id}/getByUser`, config);
    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data });
    localStorage.setItem("listMyOrders", JSON.stringify(data));

  } catch (error) {
    // console.log(error)
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message)
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: message,
    });
  }
};


export const findByStatus = (Status, IDorder, link, service) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const id = userInfo._id

    const { data } = await axios.post(`http://localhost:5000/api/orders/findByStatus`, { Status, id, IDorder, link, service }, config);
    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data });
    // localStorage.removeItem("listMyOrders")
    localStorage.setItem("listMyOrders", JSON.stringify(data));

  } catch (error) {
    // console.log(error)
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: message,
    });
  }
};

