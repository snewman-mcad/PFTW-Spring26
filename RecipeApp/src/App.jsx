import { Routes, Route } from 'react-router-dom';
import { Home } from './views/Home.jsx';
import { RecipeDetail } from './views/RecipeDetail.jsx';
import './App.css';
import { NewRecipeForm } from './views/NewRecipeForm.jsx';

function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      {/* dynamic id is part of the parameters that gets passed */}
      <Route path=":id" element={<RecipeDetail />} />
      <Route path="/newrecipe" element={<NewRecipeForm />} />
    </Routes>
  )
}

export default App