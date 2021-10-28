import React, { useEffect, useState } from "react";
import arrow from '../assets/img/down-arrow.svg';
import veg from '../assets/img/kale.png'
import Header from '../components/common/Header';
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../reducks/items/selectors";
import { fetchItems } from "../reducks/items/operations";
import { push } from "connected-react-router";
import queryString from "query-string";
import CartItem from "../components/common/CartItem";



export default function Items() {
    const parsed = queryString.parse(window.location.search);
    const [page, setPage] = useState(1);
    const [category_name, setCategoryName] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const items = getItems(selector);
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
           
                  <item key={item.id}   item={item} />
         ))
         }




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
