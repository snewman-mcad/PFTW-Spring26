import { Routes, Route } from 'react-router-dom';
import { Home } from './views/Home.jsx';
import { SkeinDetail } from './views/SkeinDetail.jsx';
import './App.css';

function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      {/* dynamic id is part of the parameters that gets passed */}
      <Route path=":id" element={<SkeinDetail />} />
    </Routes>
  )
}

export default App
