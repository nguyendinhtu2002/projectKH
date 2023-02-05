import { CART_ADD_ITEM } from "../Constants/CartContants";
import axios from "axios";
import { URL } from "../Url";

// ADD TO CART
export const addToCart = (id, qty,link) => async (dispatch, getState) => {
  
    const { data } = await axios.get(`${URL}/api/products/${id}`);
  
      dispatch({
      type: CART_ADD_ITEM,
      payload: {
        service: data.service,
        name: data.name,
        platform: data.platform,
        category: data.category,
        rate: data.rate,
        link,
        qty,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  