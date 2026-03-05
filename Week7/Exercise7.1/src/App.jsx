import Camelid from "./components/Camelid.jsx";
import Llama from "./assets/llama.png";
import Alpaca from "./assets/alpaca.png";

function App() {

  const camelidInfo = [
    {name: "Llama", img: Llama, trivia: "Llamas are used to carry goods over long distances and can carry around a quarter of their body weight."},
    {name: "Alpaca", img: Alpaca, trivia: "Alpacas are raised primarily for their soft, hypoallergenic fleece."}
  ]
  return (
    <div>
      <h1>Camelids</h1>
      <Camelid name={camelidInfo[0].name} trivia={camelidInfo[0].trivia} img={camelidInfo[0].img}/>
    </div>
  )
}

export default App
