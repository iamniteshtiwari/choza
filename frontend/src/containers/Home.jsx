
import React from 'react'
import Header from '../components/common/Header'

import img1 from "../assets/img/img1.png"
import Rect from "../assets/img/Rectangle_225.png"
import Rect1 from "../assets/img/Rectangle _226.png"
import grid1 from "../assets/img/down-grid1.png"
import grid2 from "../assets/img/down-grid2.png"
import grid3 from "../assets/img/down-grid3.png"
import grid4 from "../assets/img/down-grid4.png"
import grid5 from "../assets/img/down-grid5.png"
import HomeCard from '../components/common/HomeCard'






function Home() {
    return (
        <>
       <Header/>


        <div class="container">
    <img src={img1} alt="veg"/>
    <div class="centered">
      <h3>Hello, Dear Shopper!<br/>
        Welcome to CHOZA DE ABERROTES
        <br/>

      Get the best grocery items</h3>
    </div>
  </div>
  <div class="middle">
    <h1>Featured categorories</h1>
  </div>
  <div class="image-mosaic">
    <div class="card card-tall card-wide">
      <img src={Rect} class="rect" alt="rect"/>
      <h4 class="card-tall"><a href="vegetables.html">Vegetables</a></h4>
      <i class="bi bi-plus-lg"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg>
    </div>
    <div class="card card2">
      <img src= {Rect1} class="rect" alt="rect"/>
      <h6 class="card-img"><a href="Fruits.html">Fruits</a></h6>
      <div class="plus">
      <i class="bi bi-plus-lg"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg>
      </div>
    </div>
    <div class="card card3">
      <img src={Rect1} class="rect" alt="rect"/>
      <h6 class="card-img2"><a href="spices.html">Spices</a></h6>
      <div class="plus1">
        <i class="bi bi-plus-lg"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
        </svg>
        </div>
    </div>
    <div class="card card4">
      <img src={Rect1} class="rect" alt="rect"/>
      <h6 class="card-img3"><a href="Grains.html">Grains</a></h6>
      <div class="plus2">
        <i class="bi bi-plus-lg"></i>
        <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
        </svg>
        </div>
    </div>
    <div class="card card5">
      <img src={Rect1} class="rect" alt="rect"/>
      <h6 class="card-img4"><a href="Meat.html">Meat</a></h6>
      <div class="plus3">
        <i class="bi bi-plus-lg"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
        </svg>
        </div>
    </div>
    </div>
    
    <div class="container">
     
      <div id="div1">
        <section class="section-grid">
        <div class="grid-prod">
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>
         </div>
         </section> 
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

export default Home
