import React from 'react'
import Header from '../components/common/Header';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../API";
import { getCarts, getSubtotal } from "../reducks/cart/selectors";
import { fetchCarts } from "../reducks/cart/operations";
import { addOrder } from "../reducks/order/operations";
const api = new API();



function Shipping() {
    const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const subtotal = getSubtotal(selector);
  const carts = getCarts(selector);

  const [full_name, setFullName] = useState(""),
    [phone, setPhone] = useState(""),
    [address, setAddress] = useState(""),
    [pincode, setPincode] = useState(""),
    [apt, setApt] = useState(""),
    [city, setCity] = useState(""),
    [state, setState] = useState(""),
    [totalitem, setTotalItem] = useState(0);

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  useEffect(() => {
    let arr = [];
    if (carts != undefined && carts.length > 0) {
      for (let key in carts) {
        arr.push(carts[key].quantity);
      }
      let sum = arr.reduce(function (a, b) {
        return a + b;
      }, 0);
      setTotalItem(sum);
    }
  }, [carts]);

  const inputFullname = (e) => {
    setFullName(e.target.value);
  };

  const inputPhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const inputAddress = (e) => {
    setAddress(e.target.value);
  };

  const inputPin = (e) => {
    setPincode(e.target.value);
  };

  const inputApt = (e) => {
    setApt(e.target.value);
  };

  const inputCity = (e) => {
    setCity(e.target.value);
  };

  const inputState = (e) => {
    setState(e.target.value);
  };

  const orderButton = (e) => {
    let params = {
      total_price: subtotal,
      full_name: full_name,
      address_line1: address,
      address_line2: apt,
      city: city,
      state: state,
      postal_code: pincode,
      country: "US",
      telephone: phone,
    };
    dispatch(addOrder(params));
    e.preventDefault();
  };
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
                <input type = "name" required placeholder="Enter Recipient's Name" onChange={inputFullname}/><br/>
                <br/><span>Phone Number</span><br/>
                <input type = "pnumber" required placeholder="Enter Phone Number"onChange={inputPhoneNumber}/><br/>
                <br/><span>Street address or P.O Box</span><br/>
                <input type = "address" required placeholder="Enter Street address or P.O Box"onChange={inputAddress}/><br/>
                <br/><span>PIN Code</span><br/>
                <input type = "code" required placeholder="Enter PIN Code"onChange={inputPin}/><br/>
                <br/><span>Apt,Suit,Unit,Building</span><br/>
                <input type = "Apt" required placeholder="Enter Apt,Suit,Unit,Building" onChange={inputApt}/><br/>
                <br/><span>City</span><br/>
                <input type = "city" required placeholder="Enter City" onChange={inputCity}/><br/>
                <br/><span>State</span><br/>
                <input type = "state" required placeholder="Enter State"
                onChange={inputState}/><br/>
                <br/>
                <button class = "button"
                 onClick={orderButton}> confirm and submit</button>
                
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
