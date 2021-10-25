import React from 'react'
import chicken from '../assets/img/chicken.png'
import Header from '../components/common/Header'

export default function Cart() {
    return (
        <>
        <Header/>
<div class="head-cart">
            <p>My Cart</p>
</div>
<div class="outer-grid">
         <div class="inner-grid">
         <div class="product-des">
         <img src={chicken}/>
        <h4>Chicken</h4>
        <p>1 kg - $15</p><hr/>
        <div class="bottom-card">
        <p>$15.00</p>
        <div class="span1">
        <span>Remove</span>
        </div>
        </div>
</div>
</div>
<div class="fish">
     <div class="product-des">
     <img src={chicken}/> 
  <h4>Fish</h4>
    <p>1 kg - $20</p><hr/>
    <div class="bottom-card">
    <p>$25.00</p>
    <div class="span1">
        <span>Remove</span>
    </div>
    </div>
    </div>
</div>
</div>
<div class="inner-grid">
<div class="product-des">
    <div class="beef">
    <img src={chicken}/> 
  <h4>Beef</h4>
    <p>1 kg - $25</p><hr/>
    <div class="bottom-card">
    <p>$15.00</p>
    <div class="span1">
        <span>Remove</span>
    </div>
    </div>
    </div>
    </div>
    <div class="prawns">
    <div class="product-des"> 
    <img src={chicken}/>
<h4>Prawns</h4>
    <p>1 kg - $30</p><hr/>
    <div class="bottom-card">
    <p>$30.00</p>
    <div class="span1">
        <span>Remove</span>
    </div>
    </div>
    </div>
</div>
</div>

<div class="inner-grid">
    <div class="product-des"> 
        <div class="pork">
        <img src={chicken}/>
    <h4>Pork</h4>
    <p>1 kg - $10</p><hr/>
    <div class="bottom-card">
    <p>$10.00</p>
    <div class="span1">
        <span>Remove</span>
    </div>
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
    )
}


