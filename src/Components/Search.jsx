import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom"

function Search({ initialText = "" }) {
    const [searchTerm, setSearchTerm] = useState(initialText)
    const [searchResults, setSearchResults] = useState({})
  
    async function handleSearch() {
      // Fetch data from API based on searchTerm
      const response = await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${searchTerm}`);
      
    const data = await response.json();
      console.log(data);
      setSearchResults(data);
    }
  
    return (
      <div>
        <p>Type a mealID in the search bar to quickly find out more about that recipe!</p>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>

        <div key={searchResults.idMeal}>
            <img src={searchResults?.strMealThumb} style={{height:"200px"}}/>
            <h3>{searchResults?.strMeal}</h3>
            <p>{searchResults?.strInstructions}</p>
        </div>
      </div>
    );
  }


  export default Search;