import { Routes, Route } from 'react-router-dom';
import { Home } from './views/Home.jsx';
import { RecipeDetail } from './views/RecipeDetail.jsx';
import './App.css';

function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      {/* dynamic id is part of the parameters that gets passed */}
      <Route path=":id" element={<RecipeDetail />} />
    </Routes>
  )
}

export default App