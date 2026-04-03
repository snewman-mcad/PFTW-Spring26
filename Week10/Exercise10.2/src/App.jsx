import { Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { SongDetails } from './views/SongDetails';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* colon means it is dynamic and it is part of the parameters that gets passed */}
        <Route path="/songs/:slug" element={<SongDetails />} />
      </Routes>
    </>
  )
}

export default App
