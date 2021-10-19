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
            </div>
            <div class = "Sign-In">
                <a href = "signin.html">Sign-In</a> &nbsp; <a href = "signup.html">Sign-Up</a>
                <a href = "cart.html" alt="cart">
                    <img class="cart-icon" src = {outlinePrev} alt="cart"/>
                </a>
            </div>
        </section>

    </header>
        </>
    )
}
