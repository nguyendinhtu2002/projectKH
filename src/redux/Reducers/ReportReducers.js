import { MESSAGE_DETAILS_LIST_MY_FAIL, MESSAGE_DETAILS_LIST_MY_REQUEST, MESSAGE_DETAILS_LIST_MY_RESET, MESSAGE_DETAILS_LIST_MY_SUCCESS, MESSAGE_LIST_MY_FAIL, MESSAGE_LIST_MY_REQUEST, MESSAGE_LIST_MY_RESET, MESSAGE_LIST_MY_SUCCESS, REPORT_CREATE_FAIL, REPORT_CREATE_REQUEST, REPORT_CREATE_SUCCESS } from "../Constants/ReportContans";

// LIST MESSAGE
export const reportReducer = (state = { report: [] }, action) => {
    switch (action.type) {
        case REPORT_CREATE_REQUEST:
            return { loading: true, report: [] };
        case REPORT_CREATE_SUCCESS:
            return {
                loading: false,
                report: action.payload,
            };
        case REPORT_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

//LIST MESSAGE
export const messageListMyReducer = (state = {}, action) => {
    switch (action.type) {
      case MESSAGE_LIST_MY_REQUEST:
        return { loading: true };
      case MESSAGE_LIST_MY_SUCCESS:
        return { loading: false, messager: action.payload };
      case MESSAGE_LIST_MY_FAIL:
        return { loading: false, error: action.payload };
      case MESSAGE_LIST_MY_RESET:
        return { messager: [] };
      default:
        return state;
    }
  };
  //LIST MESSAGE
export const messageListDetailMyReducer = (state = {}, action) => {
    switch (action.type) {
      case MESSAGE_DETAILS_LIST_MY_REQUEST:
        return { loading: true };
      case MESSAGE_DETAILS_LIST_MY_SUCCESS:
        return { loading: false, messager: action.payload };
      case MESSAGE_DETAILS_LIST_MY_FAIL:
        return { loading: false, error: action.payload };
      case MESSAGE_DETAILS_LIST_MY_RESET:
        return { messager: [] };
      default:
        return state;
    }
  };
  