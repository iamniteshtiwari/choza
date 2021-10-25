import React from 'react';
import outlinePrev from "../../assets/img/bag.png"

export default function Header() {
    return (
        <>
            <header>
        <section class = "header-box">
            <div class = "header">
                <span class = "choza"> CHOZA</span><br/>
                <span class = "choza"> DE ABARROTES </span>
                <a href="Home"></a>
           </div>
            <div class = "Sign-In">
                <a href = "Signin">Sign-In</a> &nbsp; <a href = "SignUp">Sign-Up</a>
                <a href = "Cart" alt="cart">
                    <img class="cart-icon" src = {outlinePrev} alt="cart"/>
                </a>
            </div>
        </section>

    </header>
        </>
    )
}
