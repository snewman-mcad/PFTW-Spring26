import "./App.css";

function App() {

  const llamaFacts = [
    "Llamas are native to the mountainous region of South America",
    "Llamas were domesticated 4,000 to 6,000 years ago and may be the first known domesticated animal.",
    "Llamas were domesticated from wild guanacos, also classified as Lama glama.",
    "Llamas are herbivores. Like cows, they also regurgitate their food and chew on their cud.",
    "Llamas weigh around 280 to 450 pounds and can carry about a quarter of their body weight."
  ];

  const packAnimal = true;

  return (
    <div>
      <h1>🦙Llama Facts!🦙</h1>
      <ul>
        <li>{llamaFacts[0]}</li>
        <li>{llamaFacts[1]}</li>
        <li>{llamaFacts[2]}</li>
        {/*ternary for whether a llama is a pack animal, will show the last fact in the array if true*/}
        <li>{packAnimal ? llamaFacts[4] : llamaFacts[3]}</li>
      </ul>
    </div>
  );
}

export default App
