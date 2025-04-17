import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import RecipeList from './Components/RecipeList'
import Nav from './Components/Nav'
import Recipe from './Components/Recipe'
import SignUp from './Components/SignUp.jsx';
import Auth from './Components/Auth.jsx';
import LogIn from './Components/LogIn.jsx';


function App() {

  return (
    <>  
      <div id="navbar">
      <Nav />
      </div>
      <div id="main-section">
      <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/Recipe/:id" element={<Recipe />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/LogIn" element={<LogIn />} />
      </Routes>
      </div>
      <div>
      <RecipeList  />
      </div>
    </>
  )
}

export default App
