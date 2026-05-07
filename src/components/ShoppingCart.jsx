import React from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from '../features/cart';
import Displayer from './Displayer';

function ShoppingCart() {
    const dispatch = useDispatch()
    
  return (
    <div>
        <h1>Shopping Cart</h1>
       <Displayer  />
        <button onClick={()=> dispatch(addItems({id: 1, name: "Mango", price: 40}))}>Add to cart</button>
    </div>
  )
}

export default ShoppingCart