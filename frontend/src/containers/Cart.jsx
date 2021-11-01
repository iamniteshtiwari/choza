

































































import React from 'react'
import  { useEffect } from "react";
import chicken from '../assets/img/chicken.png'
import Header from '../components/common/Header'
import Items from './Items';
import { getCarts } from "../reducks/cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";
import { fetchCarts } from "../reducks/cart/operations";
import { fetchItems } from '../reducks/items/operations';
import { getItems } from '../reducks/items/selectors';




export default function Cart() {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const items = getItems(selector);

    console.log(items);
  
    useEffect(() => {
      dispatch(fetchItems());
      dispatch(fetchCarts());
    }, []);
    return (
        <>
        <Header/>
<div class="head-cart">
            <p>My Cart</p>
</div>
<div class="outer-grid">
         <div class="inner-grid">
         <div class="product-des">
         {carts && carts.map((cart) => <Items item={cart.item_id} />)}
        <div class="span1">
        <span>Remove</span>
        </div>
        
</div>


    
    </div>



    <div class="checkoutbox">
        <h4>SUBTOTAL</h4>
        <p>(5) ITEMS <span> $100.00</span></p>
        <hr/>
        <div class="Cbutton">
        <p>Proceed to Checkout</p>
        </div>
    </div>
</div>

        <div class="footer1">
            <hr/>
            <p>CHOZA <br/>DE
              ABARROTES</p>
        </div>

        </>
    );
}


  