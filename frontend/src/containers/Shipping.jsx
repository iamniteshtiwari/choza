import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from '../components/common/Header';



function Shipping() {
    return (
       <>
        <Header/>
<section class = "main">
        <form>
            <div class="my-details">
                <p>My items Details </p>
            </div>
            <div class="check">
                <p>Please check your items and confirm it.</p>
            </div>
          
            <table>
                <tr>
                    <td>BlueBerries</td>
                    <td>1</td>
                    <td>$39.00</td>
                </tr>
                <tr>
                    <td>Onion</td>
                    <td>2</td>
                    <td>$40.00</td>
                </tr>
                <tr>
                    <td>BlueBerries</td>
                    <td>3</td>
                    <td>$12.00</td>
                </tr>
                <tr class = "border">
                    <td>Total</td>
                    <td>3</td>
                    <td>$91.00</td>
                </tr>
            </table>
            <div class = "input3">
                <span>Full Name</span><br/>
                <input type = "name" required placeholder="Enter Recipient's Name"/><br/>
                <br/><span>Phone Number</span><br/>
                <input type = "pnumber" required placeholder="Enter Phone Number"/><br/>
                <br/><span>Street address or P.O Box</span><br/>
                <input type = "address" required placeholder="Enter Street address or P.O Box"/><br/>
                <br/><span>PIN Code</span><br/>
                <input type = "code" required placeholder="Enter PIN Code"/><br/>
                <br/><span>Apt,Suit,Unit,Building</span><br/>
                <input type = "Apt" required placeholder="Enter Apt,Suit,Unit,Building"/><br/>
                <br/><span>City</span><br/>
                <input type = "city" required placeholder="Enter City"/><br/>
                <br/><span>State</span><br/>
                <input type = "state" required placeholder="Enter State"/><br/>
                <br/>
                <button class = "button"> confirm and submit</button>
                
            </div>
            </form>
    </section>

    <div class="footer1">
    <hr/>
        <p>CHOZA <br/>
        DE ABARROTES</p>
    </div>
       </>
    )
}

export default Shipping
