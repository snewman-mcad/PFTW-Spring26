import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Song } from './views/Song';
import './App.css';

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* component worked here for the dynamic paths but not element (so that was switched) */}
        <Route path="/" element={<Home />} />
        {/* colon means it is dynamic and part of the parameters that gets passed */}
        {/* <Route path="./:slug" component={<Song />} /> */}
      </Routes>
    </>
  )
}

export default App
