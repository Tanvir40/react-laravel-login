import React from 'react'
import FormInput from './components/FormInput';
import "./App.css";

const App = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
       <FormInput erroMessage="User Name should be 3-16 characters and shouldn't include any special character" labelMessage="User Name" type="text" name="name" placeholder="Enter Your UserName" patTern="^[A-Za-z0-9 ]{3,20}$"/>

       <FormInput erroMessage="It should be a valid Email address!" labelMessage="Email" type="email" name="email" placeholder="Enter Your Email"/>

       <FormInput erroMessage="Phone number should be 11 mumbers only" labelMessage="Phone" type="text" name="phone" placeholder="Enter Your Phone" patTern="^[0-9]{11}$"/>

       <FormInput erroMessage="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!" labelMessage="Password" type="password" name="password" placeholder="Enter Your Password" patTern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z0-9\d@$!%*#?&]{8,20}$"/>

       <FormInput erroMessage="Confirm password dosen't match! " labelMessage="Confirm Password" type="password" name="confirm_password" placeholder="Enter Your Confirm-Password" patTern="{props.value}" />

       <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App

