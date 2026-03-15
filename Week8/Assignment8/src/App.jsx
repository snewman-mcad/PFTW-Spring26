import {useState} from 'react';
import './App.css';
import Skein from './components/Skein.jsx';
import {nanoid} from 'nanoid';

function App() {
  
  const allSkeins = [
    {
      name: "June Alexandrite",
      weight: "Fingering (1)",
      weightNumber: "one",
      yardage: 550,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: './june-alexandrite.jpg',
      alt: "Skein of teal and violet yarn that has a shiny quality to it.",
      price: 30,
      id: 1
    },{
      name: "Naughty List",
      weight: "Worsted (4)",
      weightNumber: "four",
      yardage: 220,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: './naughty-list.jpg',
      alt: "Skein of dark purple, violet, and lilac yarn that has a shiny quality to it.",
      price: 30,
      id: 2
    },{
      name: "Dragon Lore",
      weight: "Fingering (1)",
      weightNumber: "one",
      yardage: 500,
      fiber: "50% Camel Silk and 50% Mulberry Silk",
      image: './dragon-lore.jpg',
      alt: "Multi color skein of yarn. Colors included are teal, gold, white, and mulberry.",
      price: 37,
      id: 3
    },{
      name: "Belladonna Kiss",
      weight: "Fingering (1)",
      weightNumber: "one",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: './belladonna-kiss.jpg',
      alt: "A mostly dark purple skein of yarn with some splashes of white and raspberry.",
      price: 26,
      id: 4
    },{
      name: "October Opal",
      weight: "DK (3)",
      weightNumber: "three",
      yardage: 250,
      fiber: "70% Superwash Merino Wool, 20% Nylon, and 10% Silk",
      image: './october-opal.jpg',
      alt: "Skein of mostly white and turquoise yarn with some splashes of mint and pink.",
      price: 25,
      id: 5
    },{
      name: "Blackcurrant Beauty",
      weight: "Fingering (1)",
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
    </div>
  )
}

export default App
