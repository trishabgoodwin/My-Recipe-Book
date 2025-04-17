import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import RecipeList from './Components/RecipeList'
import Nav from './Components/Nav'
import Recipe from './Components/Recipe'
import SignUp from './Components/SignUp.jsx';
import Auth from './Components/Auth.jsx';
import LogIn from './Components/LogIn.jsx';
import Favorites from './Components/Favorites.jsx';


function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null)

  return (
    <>  
      <div id="navbar">
      <Nav />
      </div>
      <div id="main-section">
      <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/Recipe/:id" element={<Recipe />} />
      <Route path="/SignUp" element={<SignUp token={token} setToken={setToken}/>} />
      <Route path="/Auth" element={<Auth token={token} setToken={setToken}/>} />
      <Route path="/LogIn" element={<LogIn token={token} setToken={setToken}/>} />
      <Route path="/Favorites" element={<Favorites />} />
      </Routes>
      </div>
      <div>
      <RecipeList  />
      </div>
    </>
  )
}

export default App
