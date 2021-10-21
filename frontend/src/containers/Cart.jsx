import React from 'react'

export default function Cart() {
    return (
        <>
<div class="head-cart">
            <p>My Cart</p>
</div>
<div class="outer-grid">
         <div class="inner-grid">
         <div class="product-des">
         <img src="img/chicken.png"/>
        <h4>Chicken</h4>
        <P>1 kg - $15</P><hr/>
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
  <img src="img/fish.png"/>  
  <h4>Fish</h4>
    <P>1 kg - $20</P><hr/>
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
  <img src="img/beef.png"/>  
  <h4>Beef</h4>
    <P>1 kg - $25</P><hr/>
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
<img src="img/prawns.png"/>
<h4>Prawns</h4>
    <P>1 kg - $30</P><hr/>
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
    <img src="img/pork.png"/>
    <h4>Pork</h4>
    <P>1 kg - $10</P><hr/>
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
            <hr style="border: 2px solid #3e742d; width:95%"/>
            <p>CHOZA <br/>DE
              ABARROTES</p>
        </div>

        </>
    )
}


