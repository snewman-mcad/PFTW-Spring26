import './App.css';
import Skein from './components/Skein.jsx';

function App() {

  const allSkeins = [
    {
      name: "June Alexandrite",
      weight: "Fingering (1)",
      yardage: 550,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: './june-alexandrite.jpg'
    },{
      name: "Naughty List",
      weight: "Worsted (4)",
      yardage: 220,
      fiber: "50% Superwash Merino Wool and 50% Mulberry Silk",
      image: './naughty-list.jpg'
    },{
      name: "Dragon Lore",
      weight: "Fingering (1)",
      yardage: 500,
      fiber: "50% Camel Silk and 50% Mulberry Silk",
      image: './dragon-lore.jpg'
    },{
      name: "Belladonna Kiss",
      weight: "Fingering (1)",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: './belladonna-kiss.jpg'
    },{
      name: "October Opal",
      weight: "DK (3)",
      yardage: 250,
      fiber: "70% Superwash Merino Wool, 20% Nylon, and 10% Silk",
      image: './october-opal.jpg'
    },{
      name: "Blackcurrant Beauty",
      weight: "Fingering (1)",
      yardage: 400,
      fiber: "100% Superwash Merino Wool",
      image: './blackcurrant-beauty.jpg'
    }
  ];

  return (
    <div>
      <h1>Yarn Wish List</h1>
      {/*Calling the component Skein and passing it the props of allSkeins */}
      <Skein skeins={allSkeins}/>
    </div>
  )
}

export default App
