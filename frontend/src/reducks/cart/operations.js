import API from "../../API";
import {
  addCartAction,
  fetchCartItemsAction,
  increaseCartAction,
  decreaseCartAction,
} from "./actions";

const api = new API();

export const fetchCarts = () => {
  return async (dispatch) => {
    return api
      .getCarts()
      .then((carts) => {
        const subtotal = calculateSubtotal(carts);
        dispatch(fetchCartItemsAction(carts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API: /carts/");
      });
  };
};

export const addCart = (item) => {
  return async (dispatch, getState) => {
    return api
      .addCarts(item.id)
      .then((addedCart) => {
        // console.log('addedCart', addedCart);
        let prevCarts = getState().carts.results;
        console.log('prevC', prevCarts);
        addedCart["item"] = item;
        prevCarts.push(addedCart);
        const subtotal = calculateSubtotal(prevCarts);
        dispatch(addCartAction(prevCarts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API to add cart");
        console.log(error);
      });
  };
};

export const increaseCart = (cart_id) => {
  return async (dispatch, getState) => {
    let prevCarts = getState().carts.list;
    let matchedCarts = prevCarts.filter((cart) => cart.id === cart_id);
    let nextSelectedCount = 0;
    if (matchedCarts.length > 0) {
      nextSelectedCount = matchedCarts[0].quantity + 1;
    }

    return api
      .updateCarts(cart_id, nextSelectedCount)
      .then((updatedCart) => {
        prevCarts = prevCarts.filter((cart) => cart.id === cart_id);
        updatedCart["item"] = updatedCart.item_id;
        updatedCart["item_id"] = updatedCart.item_id.id;
        prevCarts.unshift(updatedCart);
        const subtotal = calculateSubtotal(prevCarts);
        dispatch(increaseCartAction(prevCarts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API to increase cart's quantity");
        console.log(error);
      });
  };
};

export const decreaseCart = (cart_id) => {
  return async (dispatch, getState) => {
    let prevCarts = getState().carts.list;
    let matchedCarts = prevCarts.filter((cart) => cart.id === cart_id);
    let nextSelectedCount = matchedCarts[0].quantity - 1;
    if (nextSelectedCount > 0) {
      // if quantity is more than 0, update
      return api
        .updateCarts(cart_id, nextSelectedCount)
        .then((updatedCart) => {
          prevCarts = prevCarts.filter((cart) => cart.id !== cart_id);
          prevCarts.push(updatedCart);
          updatedCart["item"] = updatedCart.item_id;
          updatedCart["item_id"] = updatedCart.item_id.id;
          const subtotal = calculateSubtotal(prevCarts);
          dispatch(decreaseCartAction(prevCarts, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to decrease cart's quantity");
          console.log(error);
        });
    } else {
      // if quantity is 0, delete
      return api
        .deleteCarts(cart_id)
        .then((deletedCart) => {
          prevCarts = prevCarts.filter((cart) => cart.id !== cart_id);
          const subtotal = calculateSubtotal(prevCarts);
          dispatch(decreaseCartAction(prevCarts, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to decrease cart's quantity");
          console.log(error);
        });
    }
  };
};

const calculateSubtotal = (carts) => {
  let subtotal = 0;
  for (let key in carts) {
    subtotal += Number(carts[key].item.price) * carts[key].quantity;
  }
  return subtotal;
};