import React from 'react'

const Items = (item) => {
    return (
        <>
            <div class="card1">
                 <div class="item-name">{item.name}</div>
                 <div class="price"></div>
                 <hr/>
                 <div class="total">$15.00</div>
                 <button class="button1">Add++</button>
             </div>  
        </>
    )
}

export default Items
