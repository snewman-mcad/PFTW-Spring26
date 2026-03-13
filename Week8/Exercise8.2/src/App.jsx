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
  const [headline, setHeadline] = useState("List of Animals")
  const [animalList, setAnimalList] = useState(animalTypesArray);

  function deleteAnimal(animalType) {
    const updatedAnimalArray = animalList.filter((animal) => {
      return animal !== animalType;
    });
    setAnimalList (updatedAnimalArray);
  }

  function focusAnimal(animalType) {
    setHeadline(animalType);
  }

  return (
    <>
      <h1>Let's focus on {headline}</h1>
      {animalList.map((loopAnimals) => {
        return(
          <Animals 
            key={loopAnimals} 
            animalType={loopAnimals} 
            deleteFn={deleteAnimal}
            focusFn={focusAnimal}/>
        )
      })}
      <button style={{margin: "0 auto"}} onClick={() => {
        setAnimalList(animalTypesArray);
      }}>Reset</button>
    </>
  )
}

export default App
