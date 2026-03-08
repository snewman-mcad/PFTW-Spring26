import './App.css';
import Skein from './components/Skein.jsx';

function App() {

  const allSkeins = [
    {
      name: "June Alexandrite",
      weight: "Fingering (1)",
      yardage: 550,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: './june-alexandrite.jpg',
      alt: "Skein of teal and violet yarn that has a shiny quality to it.",
      price: 30
    },{
      name: "Naughty List",
      weight: "Worsted (4)",
      yardage: 220,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: './naughty-list.jpg',
      alt: "Skein of dark purple, violet, and lilac yarn that has a shiny quality to it.",
      price: 30
    },{
      name: "Dragon Lore",
      weight: "Fingering (1)",
      yardage: 500,
      fiber: "50% Camel Silk and 50% Mulberry Silk",
      image: './dragon-lore.jpg',
      alt: "Multi color skein of yarn. Colors included are teal, gold, white, and mulberry.",
      price: 37
    },{
      name: "Belladonna Kiss",
      weight: "Fingering (1)",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: './belladonna-kiss.jpg',
      alt: "A mostly dark purple skein of yarn with some splashes of white and raspberry.",
      price: 26
    },{
      name: "October Opal",
      weight: "DK (3)",
      yardage: 250,
      fiber: "70% Superwash Merino Wool, 20% Nylon, and 10% Silk",
      image: './october-opal.jpg',
      alt: "Skein of mostly white and turquoise yarn with some splashes of mint and pink.",
      price: 25
    },{
      name: "Blackcurrant Beauty",
      weight: "Fingering (1)",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: './blackcurrant-beauty.jpg',
      alt: "Skein of dark teal and purple yarn.",
      price: 26
    }
  ];

  return (
    <div>
      <h1>Yarn Wish List</h1>
      {allSkeins.map((yarn, index) => {
        return(
          /*Calling the component Skein and passing it the props of allSkeins */
          <Skein 
          key={yarn.name}
          odd={index % 2 === 0}
          name={yarn.name}
          image={yarn.image}
          alt={yarn.alt}
          weight={yarn.weight}
          fiber={yarn.fiber}
          yardage={yarn.yardage}
          price={yarn.price}/>
        )
      })}
      <p style={{fontSize: '1.2rem'}}>Please note: If a yarn/skein is expensive, <span className={"expensive"}>above $35</span>, the price will be marked <span className={"expensive"}>green and italic</span></p>
    </div>
  )
}

export default App
