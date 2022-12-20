import { WALLET_CREATE_FAIL, WALLET_CREATE_REQUEST, WALLET_CREATE_SUCCESS, WALLET_UPDATE_FAIL, WALLET_UPDATE_REQUEST, WALLET_UPDATE_SUCCESS } from "../Constants/WalletContants";

export const walletCreateReducer = (state = [], action) => {
    switch (action.type) {
        case WALLET_CREATE_REQUEST:
            return { loading: true, wallet: [] };
        case WALLET_CREATE_SUCCESS:
            return { loading: false, success: true, wallet: action.payload };
        case WALLET_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// UPDATE PROFILE
export const walletUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case WALLET_UPDATE_REQUEST:
            return { loading: true };
        case WALLET_UPDATE_SUCCESS:
            return { loading: false, success: true, wallet: action.payload };
        case WALLET_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
