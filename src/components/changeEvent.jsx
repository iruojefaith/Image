import React from 'react'

function ChangeEvent() {

   const handleChange = (event) => {
    event.preventDefault();
    //getting a value of an input
    console.log("value:", event.target.value);
   }

  return (
    <section className='formContainer'>
        <form

          onSubmit={(event) => {
            event.preventDefault();
            const {name, email, telephone} = event.target.elements;
            alert (`Hello your name is ${name.value} email is ${email.value} and your telephone number is${telephone.value}`);
        }}
        >



            <input onChange={handleChange} type="text" placeholder='Enter your name' name='name'/>
            <input type="email" placeholder='Enter your Email' name='email'/>
            <input type="tel" placeholder='Enter your Phonenumber' name='telephone'/>
            <div className='btn'>
                 <button type='submit' className='button'> Submit</button>
            </div>

        </form>
    </section>
  )
}

export default ChangeEvent