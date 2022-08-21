import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="form-container">
      <form className='register-form'>
        <input 
          className='form-field'
          placeholder='Name'
          name='firstName'
        />
        <input 
          className='form-field'
          placeholder='Email'
          name='email'
        />
        <input 
          className='form-field'
          placeholder='Phone Number'
          name='phoneNumber'
        />
        <button
          className='form-field button'
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
