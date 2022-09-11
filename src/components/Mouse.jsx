import React ,{useState} from 'react'

function MouseEvent() {
    //initial value stored in the state
    const [state, setState] = useState("Magic is Right Here");

    const handleMouseOver = (event) => {
        event.preventDefault();
        setState("Welcome to New life");

        setTimeout(() => {
            setState("Magic is right here");}
        , 1000)
    }

  return (
    <div className='mouseContainer'>
    <section className='containerContent'>
         <h1 onMouseOver={handleMouseOver}>{state}</h1>
    </section>

    </div>
  )
}

export default MouseEvent;