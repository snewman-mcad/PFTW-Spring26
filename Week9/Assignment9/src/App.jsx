import {useState} from 'react';
import {useForm}  from 'react-hook-form';
import './App.css';
import Skein from './components/Skein.jsx';
import {nanoid} from 'nanoid';

function App() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  
  const allSkeins = [
    {
      name: "June Alexandrite",
      weight: "Fingering",
      weightNumber: "one",
      yardage: 550,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: './june-alexandrite.jpg',
      alt: "Skein of teal and violet yarn that has a shiny quality to it.",
      price: 30,
      id: 1
    },{
      name: "Naughty List",
      weight: "Worsted",
      weightNumber: "four",
      yardage: 220,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: './naughty-list.jpg',
      alt: "Skein of dark purple, violet, and lilac yarn that has a shiny quality to it.",
      price: 30,
      id: 2
    },{
      name: "Dragon Lore",
      weight: "Fingering",
      weightNumber: "one",
      yardage: 500,
      fiber: "50% Camel Silk and 50% Mulberry Silk",
      image: './dragon-lore.jpg',
      alt: "Multi color skein of yarn. Colors included are teal, gold, white, and mulberry.",
      price: 37,
      id: 3
    },{
      name: "Belladonna Kiss",
      weight: "Fingering",
      weightNumber: "one",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: './belladonna-kiss.jpg',
      alt: "A mostly dark purple skein of yarn with some splashes of white and raspberry.",
      price: 26,
      id: 4
    },{
      name: "October Opal",
      weight: "DK",
      weightNumber: "three",
      yardage: 250,
      fiber: "70% Superwash Merino Wool, 20% Nylon, and 10% Silk",
      image: './october-opal.jpg',
      alt: "Skein of mostly white and turquoise yarn with some splashes of mint and pink.",
      price: 25,
      id: 5
    },{
      name: "Blackcurrant Beauty",
      weight: "Fingering",
      weightNumber: "one",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: './blackcurrant-beauty.jpg',
      alt: "Skein of dark teal and purple yarn.",
      price: 26,
      id: 6
    }
  ];
  const [yarns, setYarns] = useState(allSkeins);

  function addNewYarn(data) {
    //do stuff with data to add more yarn
    //taking existing yarn skeins and spreading a new deck to it
    console.log("this is the data", data);
    //creating a new id that is 6 characters long for the new yarn
    const newId = nanoid(6);
    //adds the new id to the set of data
    const newYarnSet = {...data, id: newId};
    console.log(newYarnSet);
    setYarns([...yarns, newYarnSet]);
  }

  function deleteSkein(id) {
    const updatedArray = yarns.filter((yarn) => {
      /*returns everything except for the yarn that was clicked on (and had the matching id)*/
      return yarn.id !== id;
    });
    setYarns(updatedArray);
  }

  function duplicateSkein(id) {
    const matchingSkein = yarns.find((yarn) => {
      /*returns the item/yarn with the matching id */
      return yarn.id === id
    });
    /*variable updatedSkeins is for the duplicated item/object that is the matchingSkein; creating a unique id with the nanoid */
    const updatedSkeins = {...matchingSkein, id: nanoid()};
    /*adding the updatedSkeins object to the array of yarns using state*/
    setYarns([...yarns, updatedSkeins]);
  }

  return (
    <div className='page'>
      <h1 className='dark-background'>Yarn Wish List</h1>
      <div className='collection'>
        {yarns.map((yarn, index) => {
          return(
            /*Calling the component Skein and passing it the props of allSkeins */
            <Skein 
            key={yarn.id}
            odd={index % 2 === 0}
            /*passing functions as props */
            deleteFn={deleteSkein}
            duplicateFn={duplicateSkein}
            /*Using spread operator to create all of the props from the useState */
            {...yarn}/>
          )
        })}
      </div>
      <div className='dark-background'>
        <p className='note'>Please note: If a yarn/skein is expensive, <span className={"expensive"}>above $35</span>, the price will be marked <span className={"expensive"}>green and italic</span>.</p>
        <div className="reset-block">
          <p>To reset <br />the wish list:</p>
          <button className="reset" onClick={() => {
            /*resets the list of yarns to the original array allSkeins*/
            setYarns(allSkeins);
          }}>Reset</button>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(addNewYarn)} className='dark-background'>
          {/*Form area for yarn name*/}
          <div className="form-group">
            <label htmlFor="yarnName">Name of the yarn: </label>
            <input id="yarnName" {...register("name", {required: true})} />
            {errors.name && (<p className="error">Yarn name is required</p>)}
          </div>

          {/*Form area for an image of the yarn*/}
          <div className="form-group">
            <label htmlFor="image">Upload an image</label>
            <input id="image" {...register("image")} />
          </div>

          {/*This is the set of radio buttons for yarn category*/}
          <div className="form-group">
            <div>
              <p>What is the category of the yarn?</p>
              <label htmlFor="weight-fingering">Fingering: </label>
              <input type="radio" id="weight-fingering" value="Fingering" {...register("weight")}></input>

              <label htmlFor="weight-lace">Lace: </label>
              <input type="radio" id="weight-lace" value="Lace" {...register("weight")}></input>

              <label htmlFor="weight-sport">Sport: </label>
              <input type="radio" id="weight-sport" value="Sport" {...register("weight")}></input>

              <label htmlFor="weight-sock">Sock: </label>
              <input type="radio" id="weight-sock" value="Sock" {...register("weight")}></input>

              <label htmlFor="weight-dk">DK: </label>
              <input type="radio" id="weight-dk" value="DK" {...register("weight")}></input>

              <label htmlFor="weight-worsted">Worsted: </label>
              <input type="radio" id="weight-worsted" value="Worsted" {...register("weight")}></input>

              <label htmlFor="weight-bulky">Bulky: </label>
              <input type="radio" id="weight-bulky" value="Bulky" {...register("weight")}></input>
            </div>
          </div>

          {/*This is the set of radio buttons for yarn weight*/}
          <div className="form-group">
            <div>
              <p>What is the weight of the yarn?</p>
              <label htmlFor="weightNumber-one">One: </label>
              <input type="radio" id="weightNumber-one" value="one" {...register("weightNumber")}></input>

              <label htmlFor="weightNumber-two">Two: </label>
              <input type="radio" id="weightNumber-two" value="two" {...register("weightNumber")}></input>

              <label htmlFor="weightNumber-three">Three: </label>
              <input type="radio" id="weightNumber-three" value="three" {...register("weightNumber")}></input>

              <label htmlFor="weightNumber-four">Four: </label>
              <input type="radio" id="weightNumber-four" value="four" {...register("weightNumber")}></input>

              <label htmlFor="weightNumber-five">Five: </label>
              <input type="radio" id="weightNumber-five" value="five" {...register("weightNumber")}></input>
            </div>
          </div>

          {/*creating a field for yardage*/}
          <div className="form-group">
            <label htmlFor="yardage">How many yards per skein?</label>
            <input type="number" id="yardage" {...register("yardage", {required: true, max: 1500})}></input>
            {errors.yardage && (<p className="error">Your skein can be up to 1500 yards.</p>)}
          </div>

          {/*creating a field for fiber content*/}
          <div className="form-group">
            <label htmlFor="fiberContent">What is the fiber content of the yarn?</label>
            {/*adding validation on max number of characters*/}
            <textarea id="fiberContent" {...register("fiber", {maxLength: 200})}></textarea>
            {errors.fiber && (<p className="error">You can type a max of 200 characters.</p>)}
          </div>

          {/*creating a field for price per skein*/}
          <div className="form-group">
            <label htmlFor="price">What is the price per skein?</label>
            <input type="number" id="price" {...register("price", {required: true, max: 100})}></input>
            {errors.price && (<p className="error">Enter a price up to $100.</p>)}
          </div>
          <button type="submit">Add Yarn</button>
        </form>
      </div>
    </div>
  )
}

export default App
