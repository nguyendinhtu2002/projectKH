import { CASHFLOW_CREATE_FAIL, CASHFLOW_CREATE_REQUEST, CASHFLOW_CREATE_SUCCESS, CASHFLOW_LIST_MY_FAIL, CASHFLOW_LIST_MY_REQUEST, CASHFLOW_LIST_MY_SUCCESS, CASHFLOW_MONEY_FAIL, CASHFLOW_MONEY_REQUEST, CASHFLOW_MONEY_SUCCESS } from "../Constants/CashFlowContants";


// CREATE CASHFLOW
export const cashCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CASHFLOW_CREATE_REQUEST:
            return { loading: true };
        case CASHFLOW_CREATE_SUCCESS:
            return { loading: false, success: true, cashFlow: action.payload };
        case CASHFLOW_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const cashFlowListReducer = (state = { cashFlow: [] }, action) => {
    switch (action.type) {
        case CASHFLOW_LIST_MY_REQUEST:
            return { loading: true, cashFlow: [] };
        case CASHFLOW_LIST_MY_SUCCESS:
            return {
                loading: false,
                cashFlow: action.payload,
            };
        case CASHFLOW_LIST_MY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const getMoneyReducer = (state = {}, action) => {
    switch (action.type) {
        case CASHFLOW_MONEY_REQUEST:
            return { loading: true };
        case CASHFLOW_MONEY_SUCCESS:
            return { loading: false, cashFlow: action.payload };
        case CASHFLOW_MONEY_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

