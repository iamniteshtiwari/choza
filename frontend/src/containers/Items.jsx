import React, { useEffect, useState } from "react";
import arrow from '../assets/img/down-arrow.svg';

import Header from '../components/common/Header';
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../reducks/items/selectors";
import { fetchItems } from "../reducks/items/operations";
import { push } from "connected-react-router";
import queryString from "query-string";
import {
    addCart,
    increaseCart,
    decreaseCart,
    fetchCarts,
  } from "../reducks/cart/operations";
  

export default function Items({item}) {
    const parsed = queryString.parse(window.location.search);
    const [page, setPage] = useState(1);
    const [category_name, setCategoryName] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const items = getItems(selector);
    
  const [particularCart, setParticularCart] = useState(null);

    useEffect(() => {
      if (parsed.page != undefined) {
        setPage(parsed.page);
      }
      if (parsed.category_name != undefined) {
        setCategoryName(parsed.category_name);
      }
    }, []); 
    useEffect(() => {
      dispatch(fetchItems(page, category_name));
    }, [page,category_name]);



    const clickAddCart = async (item) => {
        console.log(item);
          await dispatch(addCart(item));
          await dispatch(fetchCarts());
        
        
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
        <Header/>

<section id="container">
            <div class="left">
            
             <table>
             <div class="category">
                 <p class="cat">  Category List</p></div>
            
             <div class="list">
             <ul>
                 <li>
                     Fruits<img src={arrow}/>
                 </li>
                 <li>
                     Spices<img src={arrow}/>
                 </li>
                 <li>
                     Grains<img src={arrow}/>
                 </li>
                 <li>
                     meat<img src={arrow}/>
                 </li>
     
             </ul>
         </div>
     </table>
     </div>
     <div class="right">
     
         <h1 class="veg-head">Vegetables</h1>
         <div class="grid">
         
             {
         items.results.map((item)=>(
            <li key={item.id}>
            <div class="card1">
             <img src={item.image} alt="" />
             <div class="item-name">{item.name} </div>
             <hr/>
             <div class="total">{item.price}</div>
             {!particularCart ? (
                 <button class="button1">
              <div className="add" onClick={() => clickAddCart(item)}>
                Add +
              </div>
              </button>
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
          </div>
        
      </li>
                 
         ))
         }




             </div>
             <div class="checkoutbox">
        <h4>SUBTOTAL</h4>
        <p>(5) ITEMS <span> $</span></p>
        <hr/>
        <button class="Cbutton"
        onClick={() => {
            dispatch(push("/shipping"));
          }}>
        Proceed to Checkout
        </button>
    
</div>
            </div>  
      
        </section>
        
           
        <div class="footer1">
            <hr/>
            <p>CHOZA <br/>DE
              ABARROTES</p>
        </div>

        

        </>
    )
}
