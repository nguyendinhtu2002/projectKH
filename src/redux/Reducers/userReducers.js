import { USER_APIKEY_FAIL, USER_APIKEY_REQUEST, USER_APIKEY_SUCCESS, USER_CHANGEAPIKEY_FAIL, USER_CHANGEAPIKEY_REQUEST, USER_CHANGEAPIKEY_SUCCESS, USER_CHANGEEMAIL_FAIL, USER_CHANGEEMAIL_REQUEST, USER_CHANGEEMAIL_SUCCESS, USER_GETUSERBYID_FAIL, USER_GETUSERBYID_REQUEST, USER_GETUSERBYID_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../Constants/UserContants";

// LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE PROFILE
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//GET APIKEY
export const apiKeyReducder = (state = {}, action) => {
  switch (action.type) {
    case USER_APIKEY_REQUEST:
      return { loading: true };
    case USER_APIKEY_SUCCESS:
      return { loading: false, success: true, ApiKey: action.payload };
    case USER_APIKEY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const changeKeyReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CHANGEAPIKEY_REQUEST:
      return { loading: true };
    case USER_CHANGEAPIKEY_SUCCESS:
      return { loading: false, success: true, ApiKey: action.payload };
    case USER_CHANGEAPIKEY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const changeEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CHANGEEMAIL_REQUEST:
      return { loading: true };
    case USER_CHANGEEMAIL_SUCCESS:
      return { loading: false, success: true, ApiKey: action.payload };
    case USER_CHANGEEMAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const getUserById = (state = {}, action) => {
  switch (action.type) {
    case USER_GETUSERBYID_REQUEST:
      return { loading: true };
    case USER_GETUSERBYID_SUCCESS:
      return { loading: false, success: true, getUserId: action.payload };
    case USER_GETUSERBYID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


