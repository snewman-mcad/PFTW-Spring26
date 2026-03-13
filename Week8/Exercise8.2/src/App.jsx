import { useState } from 'react';
import Animals from './Animals';
import './App.css';

function App() {
  const animalTypesArray = [
    "Snake",
    "Dog",
    "Cat",
    "Ferret",
    "Fish"
  ]

  const [headline, setHeadline] = useState("one of these Animals");
  const [animalList, setAnimalList] = useState(animalTypesArray);

  function deleteAnimal(animalType) {
    const updatedAnimalArray = animalList.filter((animal) => {
      /*returns everything except for the animal type that was clicked on*/
      return animal !== animalType;
    });
    setAnimalList(updatedAnimalArray);
  }

  function focusAnimal(animalType) {
    /*updated the headline with the new animal type*/
    setHeadline(animalType);
  }

  return (
    <>
      <h1>Let's focus on {headline}</h1>
      {animalList.map((loopAnimals, index) => {
        return(
          <Animals 
            key={index} 
            animalType={loopAnimals} 
            deleteFn={deleteAnimal}
            focusFn={focusAnimal}/>
        )
      })}
      <button style={{margin: "0 auto", backgroundColor: "darkred"}} onClick={() => {
        /*resets the list of animals to the original array*/
        setAnimalList(animalTypesArray);
      }}>Reset</button>
    </>
  )
}

export default App
