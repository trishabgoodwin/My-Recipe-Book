import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import RecipeList from './Components/RecipeList'
import Nav from './Components/Nav'
import Recipe from './Components/Recipe'


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
      </Routes>
      </div>
      <div>
      <h1>Here Are Some Recipes!</h1>
      <RecipeList  />
      </div>
    </>
  )
}

export default App
