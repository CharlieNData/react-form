import './App.css';
import React, {useState} from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  return (
    <div className="form-container">
      <form className='register-form'>
        <div className='success-message'>Success! You have registered.</div>
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName} 
          className='form-field'
          type='text'
          placeholder='Name'
          name='firstName'
        />
        <input
          onChange={handleLastNameInputChange} 
          value={values.lastName}
          className='form-field'
          type='text'
          placeholder='Last Name'
          name='lastname'
        />
        <input
          onChange={handleEmailInputChange} 
          className='form-field'
          type='text'
          placeholder='Email'
          name='email'
        />
        <button
          value={values.email}
          className='form-field button'
          type='submit'
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
