import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from '../features/counter';

function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((state)=> state.counter.value);
    
    
  return (
    <div>
        <h1>Counter</h1>
        <p>Value: {counter}</p>
        <button onClick={()=> dispatch(increase(1))}>Increase +</button>
        <button onClick={()=> dispatch(decrease(1))}>Decrease -</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter