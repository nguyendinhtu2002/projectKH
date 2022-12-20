import { ORDER_CREATE_FAIL, ORDER_CREATE_FAIL_TO_ME, ORDER_CREATE_REQUEST, ORDER_CREATE_REQUEST_TO_ME, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_CREATE_SUCCESS_TO_ME, ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_RESET, ORDER_LIST_MY_SUCCESS, ORDER_SEARCH_STATUS_REQUEST, ORDER_SEARCH_STATUS_SUCCESS } from "../Constants/OrderContants";

// CREATE ORDER
export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true };
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, ordersInfo: action.payload };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

// CREATE ORDER To ME
export const orderCreateReducerToMe = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST_TO_ME:
            return { loading: true };
        case ORDER_CREATE_SUCCESS_TO_ME:
            return { loading: false, success: true, ordersInfo: action.payload };
        case ORDER_CREATE_FAIL_TO_ME:
            return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return {};
        default:
            return state;
    }
};


// USER ORDERS
export const orderListMyReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_LIST_MY_REQUEST:
            return { loading: true };
        case ORDER_LIST_MY_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_LIST_MY_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_LIST_MY_RESET:
            return { orders: [] };
        default:
            return state;
    }
};

// export const searchStatusReducer = (state ={},action)=>{
//     switch(action.type){
//         case ORDER_SEARCH_STATUS_REQUEST:
//             return {loading:true}
//         case ORDER_SEARCH_STATUS_SUCCESS:
//             return {loading:false,orders:action.payload}
//         case OR
//     }
// }
