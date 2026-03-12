import { useState } from 'react';
import alpaca from './assets/alpaca.png';
import llama from './assets/llama.png';
import './App.css';

function App() {
  /*setting the state variable to the llama image*/
  const [camelidImage, setCamelidImage] = useState(llama);

  return (
    <>
      <h1>{camelidImage === llama ? "Llama" : "Alpaca"} Photo!</h1>
      {/*img src is the current camelidImage defined by the state, starts with llama*/}
      <img src={camelidImage} width={"400px"} alt=""></img>
      <p>Use the buttons below to change the image:</p>
      <div>
        {/*onClick changes the image to alpaca*/}
        <button onClick={() => setCamelidImage(alpaca)}>Alpaca</button>
        {/*onClick changes the image to llama*/}
        <button onClick={() => setCamelidImage(llama)}>Llama</button>
      </div>
      {/*adding in a toggle button (for fun since not required)*/}
      {/*ternary is asking if the image is llama, if it is the image will change to alpaca and if it isn't the image will change into llama*/}
      <button style={{margin: "0 auto"}} onClick={() => setCamelidImage(camelidImage === llama ? alpaca : llama)}>Want to Toggle?</button>
    </>
  )
}

export default App
