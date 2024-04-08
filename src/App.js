import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewAllRecipes from './components/ViewAllRecipes';

function App() {
  return (
    <BrowserRouter>
    
    
<Routes>
<Route path='/' element={<AddRecipe/>}/>
<Route path='/search' element={<SearchRecipe/>}/>
<Route path='/view' element={<ViewAllRecipes/>}/>
</Routes>
    
    </BrowserRouter>
  );
}

export default App;
