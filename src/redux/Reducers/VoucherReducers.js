import { VOUCHER_UPDATE_FAIL, VOUCHER_UPDATE_REQUEST, VOUCHER_UPDATE_SUCCESS } from "../Constants/Voucher";

// UPDATE PROFILE
export const voucherUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case VOUCHER_UPDATE_REQUEST:
        return { loading: true };
      case VOUCHER_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case VOUCHER_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };