import Alexandrite from './assets/june-alexandrite.jpg';
import Naughty from './assets/naughty-list.jpg';
import Dragon from './assets/dragon-lore.jpg';
import Belladonna from './assets/belladonna-kiss.jpg';
import Opal from './assets/october-opal.jpg';
import Blackcurrant from './assets/blackcurrant-beauty.jpg';
import './App.css';

function App() {
  const skeins = [
    {
      name: "June Alexandrite",
      weight: "Fingering (1)",
      yardage: 550,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: Alexandrite
    },{
      name: "Naughty List",
      weight: "Worsted (4)",
      yardage: 220,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: Naughty
    },{
      name: "Dragon Lore",
      weight: "Fingering (1)",
      yardage: 500,
      fiber: "50% Camel Silk and 50% Mulberry Silk",
      image: Dragon
    },{
      name: "Belladonna Kiss",
      weight: "Fingering (1)",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: Belladonna
    },{
      name: "October Opal",
      weight: "DK (3)",
      yardage: 250,
      fiber: "70% Superwash Merino Wool, 20% Nylon, and 10% Silk",
      image: Opal
    },{
      name: "Blackcurrant Beauty",
      weight: "Fingering (1)",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: Blackcurrant
    }
  ];
  
  return (
    <div>
      <h1>Yarn Wish List</h1>
      <h2>{skeins[0].name}</h2>
    </div>
  )
}

export default App
