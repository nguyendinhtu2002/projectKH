import { ADDFUNDS_CREATE_FAIL, ADDFUNDS_CREATE_REQUEST, ADDFUNDS_CREATE_RESET, ADDFUNDS_CREATE_SUCCESS, ADDFUNDS_GETLIST_MY_FAIL, ADDFUNDS_GETLIST_MY_REQUEST, ADDFUNDS_GETLIST_MY_RESET, ADDFUNDS_GETLIST_MY_SUCCESS, ADDFUNDS_LIST_MY_FAIL, ADDFUNDS_LIST_MY_REQUEST, ADDFUNDS_LIST_MY_RESET, ADDFUNDS_LIST_MY_SUCCESS, ADDFUNDS_MONEY_MY_FAIL, ADDFUNDS_MONEY_MY_REQUEST, ADDFUNDS_MONEY_MY_RESET, ADDFUNDS_MONEY_MY_SUCCESS } from "../Constants/AddFunds";

export const addFundsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADDFUNDS_CREATE_REQUEST:
            return { loading: true };
        case ADDFUNDS_CREATE_SUCCESS:
            return { loading: false, success: true, addFunds: action.payload };
        case ADDFUNDS_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ADDFUNDS_CREATE_RESET:
            return {};
        default:
            return state;
    }
};


export const addFundsListMyReducer = (state = {}, action) => {
    switch (action.type) {
        case ADDFUNDS_LIST_MY_REQUEST:
            return { loading: true };
        case ADDFUNDS_LIST_MY_SUCCESS:
            return { loading: false, addFunds: action.payload };
        case ADDFUNDS_LIST_MY_FAIL:
            return { loading: false, error: action.payload };
        case ADDFUNDS_LIST_MY_RESET:
            return { addFunds: [] };
        default:
            return state;
    }
};



export const getaddFundsListMyReducer = (state = {}, action) => {
    switch (action.type) {
        case ADDFUNDS_GETLIST_MY_REQUEST:
            return { loading: true };
        case ADDFUNDS_GETLIST_MY_SUCCESS:
            return { loading: false, addFunds: action.payload };
        case ADDFUNDS_GETLIST_MY_FAIL:
            return { loading: false, error: action.payload };
        case ADDFUNDS_GETLIST_MY_RESET:
            return { addFunds: [] };
        default:
            return state;
    }
};



