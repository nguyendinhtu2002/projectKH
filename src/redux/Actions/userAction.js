import axios from 'axios';
import { USER_APIKEY_FAIL, USER_APIKEY_REQUEST, USER_APIKEY_SUCCESS, USER_CHANGEAPIKEY_FAIL, USER_CHANGEAPIKEY_REQUEST, USER_CHANGEAPIKEY_SUCCESS, USER_CHANGEEMAIL_FAIL, USER_CHANGEEMAIL_REQUEST, USER_CHANGEEMAIL_SUCCESS, USER_GETUSERBYID_FAIL, USER_GETUSERBYID_REQUEST, USER_GETUSERBYID_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from '../Constants/UserContants';

export const register = (name, email, password, apiKey) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      'http://api.azview.us/api/users/signup',
      { name, email, password, apiKey },
      config)
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      'http://api.azview.us/api/users/login',
      { email, password },
      config)

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: message,
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");

  dispatch({ type: USER_LOGOUT });
  // dispatch({ type: USER_DETAILS_RESET });
  // dispatch({ type: ORDER_LIST_MY_RESET });
};


// UPDATE PROFILE
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`http://api.azview.us/api/users/updateProfile`, user, config);
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};


// UPDATE MONEY
export const updateMoney = (money) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();



    const { data } = await axios.put(`http://api.azview.us/api/Waller/${userInfo._id}`, money);
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    // dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

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
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};


export const apiKey = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_APIKEY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`http://api.azview.us/api/users/${userInfo._id}/apiKey`, config);
    dispatch({ type: USER_APIKEY_SUCCESS, payload: data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_APIKEY_FAIL,
      payload: message,
    });
  }
}

export const updateApiKey = (apiKey) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_CHANGEAPIKEY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`http://api.azview.us/api/users/${userInfo._id}/apiKey`, apiKey, config);
    dispatch({ type: USER_CHANGEAPIKEY_SUCCESS, payload: data });
    dispatch({ type: USER_APIKEY_SUCCESS, payload: data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_CHANGEAPIKEY_FAIL,
      payload: message,
    });
  }
}

export const changeEmail = (email) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_CHANGEEMAIL_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`http://api.azview.us/api/users/${userInfo._id}/updateEmail`, {email}, config);
    dispatch({ type: USER_CHANGEEMAIL_SUCCESS, payload: data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_CHANGEEMAIL_FAIL,
      payload: message,
    });
  }
}

export const getUserById = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_GETUSERBYID_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`http://api.azview.us/api/users/${userInfo._id}`, config);
    dispatch({ type: USER_GETUSERBYID_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_GETUSERBYID_FAIL,
      payload: message,
    });
  }
}

