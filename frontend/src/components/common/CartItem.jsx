import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import {
  addCart,
  increaseCart,
  decreaseCart,
  fetchCarts,
} from "../../reducks/cart/operations";
import { getCarts, getSubtotal } from "../../reducks/cart/selectors";
import { push } from "connected-react-router";

const CartItem = ({ item }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularCart, setParticularCart] = useState(null);
  const key = localStorage.getItem("CYBERSHOP_LOGIN_USER_KEY");
  useEffect(() => {
    if (carts.length > 0) {
      const matchedCarts = carts.filter((cart) => cart.item_id.id === item.id);
      if (matchedCarts.length > 0) {
        setParticularCart(matchedCarts[0]);
      } else {
        setParticularCart(null);
      }
    }
  }, [subtotal]);

  const clickAddCart = async () => {
    if (key) {
      await dispatch(addCart(item));
      await dispatch(fetchCarts());
    } else {
      dispatch(push("/signin"));
    }
  };

  const clickPlusCart = async () => {
    await dispatch(increaseCart(particularCart.id));
    await dispatch(fetchCarts());
  };
  const clickMinusCart = async () => {
    await dispatch(decreaseCart(particularCart.id));
    await dispatch(fetchCarts());
  };
  return (
    <>
       <li key={item.id}>
                 <div class="card1">
                  <img src={item.image} alt="" />
                  <div class="item-name">{item.name} </div>
                  <hr/>
                  <div class="total">{item.price}</div>
                  <button class="button1">Add++</button>
                </div>
              </li>
              {!particularCart ? (
              <div className="add" onClick={clickAddCart}>
                Add +
              </div>
            ) : (
              <div className="number">
                <span className="minus" onClick={clickMinusCart}>
                  －
                </span>
                <span className="count">{particularCart.quantity}</span>
                <span className="plus" onClick={clickPlusCart}>
                  +
                </span>
              </div>
            )}
          
        
    </>
  );
};

export default CartItem;