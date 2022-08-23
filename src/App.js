import './App.css';
import React, {useState} from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const valuesAllFilled = values.firstName && values.lastName && values.email;
    if (valuesAllFilled) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className='register-form' onSubmit={handleSubmit}>
        {submitted && valid ? <div className='success-message'>Success! You have registered.</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName} 
          className='form-field'
          type='text'
          placeholder='Name'
          name='firstName'
        />
        {submitted && !values.firstName ? <span class="error-message">Please enter a valid first name.</span> : null}
        
        <input
          onChange={handleLastNameInputChange} 
          value={values.lastName}
          className='form-field'
          type='text'
          placeholder='Last Name'
          name='lastname'
        />
        {submitted && !values.lastName ? <span class="error-message">Please enter a valid first name.</span> : null}
        <input
          onChange={handleEmailInputChange} 
          className='form-field'
          type='text'
          placeholder='Email'
          name='email'
        />
        {submitted && !values.email ? <span class="error-message">Please enter a valid first name.</span> : null}
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
