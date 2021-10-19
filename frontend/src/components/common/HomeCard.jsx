import React from 'react'
import ImgGrid from '../../assets/img/grid1.png'
const HomeCard = () => {
    return (
        <div class="prod-grid"><img src={ImgGrid} alt="meat"/>
        <h3>Chicken meat </h3>    
             <p>30 $</p>
        </div>
    )
}

export default HomeCard
