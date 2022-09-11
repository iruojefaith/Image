import React from 'react';
import { useState } from "react";



function Click() {

//usestate is use to store data to be rendered in the dom
const [counter, setCounter] = useState(0);


const handleIncrement = (event) => {
    event.preventDefault();
    setCounter(increment => increment + 1) ;
}

const handleDecrement = (event) => {
    event.preventDefault();
    setCounter(decrement => decrement - 1);
}


  return (
    <section className='counterContainer'>
        <button onClick={handleIncrement}>+</button>
        <button className='counterBtn'>{counter}</button>
        <button onClick={handleDecrement}>-</button>
    </section>
  )
}

export default Click;