import React from 'react'
import { useSelector } from 'react-redux'

function Displayer() {
    const cart = useSelector((state)=> state.cart.items);
    console.log(cart);
    
  return (
    <div>
        {cart.map((item)=> (
            <ul key={item.id}>
                <li>{item.name}</li>
                <li>${item.price}</li>

            </ul>
        ))}
    </div>
  )
}

export default Displayer