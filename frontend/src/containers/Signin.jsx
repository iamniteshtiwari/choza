
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/common/Footer";
import { signIn } from "../reducks/users/operations";
import Header from '../components/common/Header'




const SignIn = () => {
    const dispatch = useDispatch();
  
    const [email, setEmail] = useState(""),
      [password, setPassword] = useState("");
  
    const inputEmail = (event) => {
      setEmail(event.target.value);
    };
  
    const inputPassword = (event) => {
      setPassword(event.target.value);
    };
  
    const signInButton = (event) => {
      event.preventDefault();
      dispatch(signIn(email, password));
      setEmail("");
      setPassword("");
    };
    return (
        <>
<Header/>
<section class = "main">
        <div class = "Sign-In-form">
<form>
    
<h3 class ="sign-In">SIGN IN</h3> 
<div class = "input2">
    <span>Email Adress: </span><br/>
    <input type = "email" onChange={inputEmail} value={email} required placeholder="Enter Email "/> <br/>
    <br/>
    

    <span>Password: </span><br/>
    <input type = "password" onChange={inputPassword} value={password} required placeholder="Enter Password"/><br/>
    <br/>
     <button class = "button" onClick={signInButton}> Sign In </button>
<div class="reg">
    <p>New Customer? Register</p>
    </div>

</div>
</form>
</div>
</section>

<Footer/>

        </>
    
    );
};

export default SignIn;
