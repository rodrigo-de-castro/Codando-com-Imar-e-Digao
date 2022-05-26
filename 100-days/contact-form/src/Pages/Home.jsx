import React from 'react';
import {Contact, Formulario} from '../Styles/home';

function Home() {
  return (
    <Contact>
      <header>
        <h1>Contact Form</h1>
        <h4>Please fill the text in the fields</h4>
      </header>
      <Formulario>
        <label htmlFor='name'>
          Your Name: 
          <input id='name' placeholder='Your Full Name'/>
        </label>
        <label htmlFor='email'>
          Your Email: 
          <input id='email' type='email' placeholder='Valid Email Address'/>
        </label>
        <label htmlFor='message'>
          Message: 
          <textarea id='email' type='message' />
        </label>
        <label htmlFor='subject'>
          Subject: 
          <input id='subject' placeholder='Job Inquiry'/>
        </label>
        <button>SEND</button>
      </Formulario>
    </Contact>    
  )
}

export default Home
