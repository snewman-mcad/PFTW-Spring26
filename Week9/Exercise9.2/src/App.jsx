import {useForm} from 'react-hook-form';
import {useState} from 'react';
import './App.css';

function App() {
  //call-back function to return the props and register individual inputs into the hook
  //destructure out the register and handleSubmit props
  const {register, handleSubmit, formState: {errors}} = useForm();

  //useState to set new data upon submit button being clicked
  const [newData, setNewData] = useState();

  //using data as the argument for the function handleMyForm
  function handleMyForm(data) {
    console.log(data);
    setNewData(data);
  }

  console.log(errors);

  return (
    <div>
      <h1>Join the Alpaca Club!</h1>
      <p>Please fill out the form and let us know what you think about alpacas.</p>
      <form onSubmit={handleSubmit(handleMyForm)}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="nameArea">
            <div className="spacing">
              <label htmlFor="firstName">First Name: </label>
              {/*using spread operator register to get props, also requiring first and last name to submit the form*/}
              <input type="text" id="firstName" {...register("firstName", {required: true, minLength: 2})} placeholder="First Name" />
              {/*conditional to show if submit button was clicked and there is no first name*/}
              {errors.firstName && (<p className="error">You need to input your first name to continue.</p>)}
            </div>

            <div className="spacing">
              <label htmlFor="lastName">Last Name: </label>
              <input type="text" id="lastName" {...register("lastName", {required: true, minLength: 2})} placeholder="Last Name" />
              {errors.lastName && (<p className="error">You need to input your last name to continue.</p>)}
            </div>
          </div>

          <div className="addressArea">
            <div className="spacing">
              <label htmlFor="streetAddress">Street Address: </label>
              {/*adding a minLength of 8 to street address (the shortest address example I could think of was
              1 2nd St. which is 8 characters without the ".")*/}
              <input type="text" id="streetAddress" {...register("streetAddress", {minLength: 8})} placeholder="Street Address" />
              {errors.streetAddress && (<p className="error">Your address should be longer than 8 characters.</p>)}
            </div>

            <div>
              <div className="spacing">
                <label htmlFor="state">State: </label>
                {/*creating dropdown selector for states*/}
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
              </div>

              <div className="spacing">
                <label htmlFor="country">Country: </label>
                {/*minimum characters set to 4*/}
                <input type="text" id="country" {...register("country", {minLength: 4})} placeholder="Country" />
                {errors.country && (<p className="error">Please do not abbreviate the name of your country.</p>)}
              </div>
            </div>
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Your Ideal Alpaca</legend>
          <div className='checkboxArea'>
            <h2>Favorite Color</h2>
            {/*creating checkboxes for the favorite color choices*/}
            <div className="selection">
              <div>
                <label htmlFor="alpacaColor-white">White: </label>
                <input type="checkbox" id="alpacaColor-white" value="white" {...register("favoriteColor")}></input>
              </div>
              <div>
                <label htmlFor="alpacaColor-brown">Brown: </label>
                <input type="checkbox" id="alpacaColor-brown" value="brown" {...register("favoriteColor")}></input>
              </div>
              <div>
                <label htmlFor="alpacaColor-black">Black: </label>
                <input type="checkbox" id="alpacaColor-black" value="black" {...register("favoriteColor")}></input>
              </div>
            </div>
          </div>

          <div>
            <h2>Gender Preference</h2>
            {/*adding in some radio buttons to play with (in addition to the checkboxes) */}
            <div className="selection">
              <div>
                <label htmlFor="gender-female">Female: </label>
                <input type="radio" id="gender-female" value="female" {...register("favoriteGender")}></input>
              </div>
              <div>
                <label htmlFor="gender-male">Male: </label>
                <input type="radio" id="gender-male" value="male" {...register("favoriteGender")}></input>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="moreInfo">Tell us more about your ideal alpaca:</label>
            {/*adding validation on max number of characters*/}
            <textarea id="moreInfo" {...register("moreInfo", {maxLength: 150})} className="spacing"></textarea>
            {errors.moreInfo && (<p className="error">You can type a max of 150 characters.</p>)}
          </div>
        </fieldset>
        <button type="submit">Join the Club!</button>
      </form>
      
      <div>
        {/*conditional for if new data was submitted, it will display the (html in here) */}
        {newData && (
          <div className="submit-text">
            <h2>Welcome to the club, {newData.firstName} {newData.lastName}!</h2>
            <h3>Here are your submitted personal details:</h3>
            <p>Street address: {newData.streetAddress}</p>
            <p>State: {newData.state} | Country: {newData.country}</p>
            <h3>Here is the information on your ideal alpaca:</h3>
            {/*added conditional to check if their are favorite color(s) using the optional chaining operator ?.
            to get rid of an error from trying to join and empty array*/}
            <p>Favorite color(s): {newData.favoriteColor.join?.(", ")}</p>
            <p>Gender: {newData.favoriteGender}</p>
            <p>Other important information about your ideal alpaca:</p>
            <p>{newData.moreInfo}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App