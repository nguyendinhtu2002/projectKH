import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { apiKeyReducder, changeEmailReducer, changeKeyReducer, getUserById, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./Reducers/userReducers";
import { productListReducer } from "./Reducers/ProductRedecers";
import { cartReducer } from "./Reducers/CartReducers";
import { orderCreateReducer, orderCreateReducerToMe, orderListMyReducer } from "./Reducers/OrderReducers";
import { statusCreateReducer } from "./Reducers/StatusReducers";
import { messageListDetailMyReducer, messageListMyReducer, reportReducer } from "./Reducers/ReportReducers";
import { cashCreateReducer, cashFlowListReducer, getMoneyReducer } from "./Reducers/CashFlowReducers";
import { addFundsListMyReducer, addFundsReducer, getaddFundsListMyReducer } from "./Reducers/AddFundsReducers";
import { walletCreateReducer, walletUpdateProfileReducer } from "./Reducers/WalletReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productList: productListReducer,
  odersProduct: orderCreateReducer,
  ordersProductToMe: orderCreateReducerToMe,
  orderUser: orderListMyReducer,
  messageList: messageListMyReducer,
  addFundsList: addFundsListMyReducer,
  createWallet: walletCreateReducer,
  updateWallet: walletUpdateProfileReducer,
  getAddFundsList: getaddFundsListMyReducer,
  createCashFlow: cashCreateReducer,
  getApiKey : apiKeyReducder,
  changeApiKey : changeKeyReducer,
  getCashFlow: cashFlowListReducer,
  getMoneyByUser: getMoneyReducer,
  messageListDetail: messageListDetailMyReducer,
  addFunds: addFundsReducer,
  statusOrders: statusCreateReducer,
  userUpdate: userUpdateProfileReducer,
  reportOrder: reportReducer,
  cart: cartReducer,
  getUser:getUserById,
  changeEmailUser: changeEmailReducer,
});


const middleware = [thunk];

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const ordersLocalStorage = localStorage.getItem("ordersInfo")
  ? JSON.parse(localStorage.getItem("ordersInfo"))
  : null;

const listMyOrdersLocalStorage = localStorage.getItem("listMyOrders")
  ? JSON.parse(localStorage.getItem("listMyOrders"))
  : null;



const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
  odersProduct: { ordersInfo: ordersLocalStorage },
  orderUser: { listMyOrders: listMyOrdersLocalStorage },
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
