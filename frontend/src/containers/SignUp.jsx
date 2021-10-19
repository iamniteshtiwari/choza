import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";


export default function SignUp() {
  const dispatch = useDispatch();
  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  

    return (
         <>
            <Header/>
            
            <section class="main">
      <div class="sign-up">
        <p>SIGN-UP</p>
      </div>
      <form action="/">
        <div class="input1">
          <span>Name</span>
          <br />
          <input type="name" onChange={inputUserName}  placeholder="Enter name" value={user_name} required/>
          <br />
          <br />
          <span>Email Address</span>
          <br />
          <input type="Email" onChange={inputEmail} placeholder="Enter Email" value={email} required /> <br />
          <br />
          <span>password</span>
          <br />
          <input type="Password" onChange={inputPassword} placeholder="Enter Password" value={password} required /><br />
          <br />
          <span>Confirm Password</span>
          <br />
          <input type="password" required placeholder="Confirm Password" /><br/>
          <br/>
          
          <button class="button" onClick={signUpButton}>Sign Up</button>
          <div class="new-acc">
            <p>Have an Account? Sign In</p>
          </div>
        </div>
      </form>
    </section>
    <Footer/>
</>
    );
}
