{/*import { useState } from 'react';*/}
import {useForm} from 'react-hook-form';
import './App.css';

function App() {
  //call-back function to return the props and register individual inputs into the hook
  const {register, handleSubmit} = useForm();
  //using data as the argument for the function handleMyForm
  function handleMyForm(data) {
    console.log(data);
  }

  return (
    <div>
      <h1>Alpaca Preferences</h1>
      <p>Please fill out the form and let us know what you think about alpacas.</p>
      <form onSubmit={handleSubmit(handleMyForm)}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="nameArea">
            <label htmlFor="firstName">First Name: </label>
            {/* using spread operator register instead of name */}
            <input type="text" id="firstName" {...register("firstName")} placeholder="First Name" />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" {...register("lastName")} placeholder="Last Name" />
          </div>

          <div className="addressArea">
            <div>
              <label htmlFor="streetAddress">Street Address: </label>
              <input type="text" id="streetAddress" {...register("streetAddress")} placeholder="Street Address" />
            </div>
            <div>
              <label htmlFor="state">State: </label>
              <select id="state" {...register("state")}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="CO">Colorado</option>
                <option value="KY">Kentucky</option>
                <option value="MN">Minnesota</option>
                <option value="OH">Ohio</option>
                <option value="UT">Utah</option>
                <option value="WI">Wisconsin</option>
              </select>
              <label htmlFor="country">Country: </label>
              <input type="text" id="country" {...register("country")} placeholder="Country" />
            </div>
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Your Ideal Alpaca</legend>
          <div className='checkboxArea'>
            <label htmlFor="alpacaColor-white">White: </label>
            <input type="checkbox" id="alpacaColor-white" value="white"></input>
            <label htmlFor="alpacaColor-brown">Brown: </label>
            <input type="checkbox" id="alpacaColor-brown" value="brown"></input>
            <label htmlFor="alpacaColor-black">Black: </label>
            <input type="checkbox" id="alpacaColor-black" value="black"></input>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
