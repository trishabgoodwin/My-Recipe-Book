import { Routes, Route, Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Search from "./Search"

function Recipe() {
const [recipe, setRecipe] = useState([])
const [favorite, setFavorite] = useState(null)
const {id} = useParams()
const navigate = useNavigate()

  useEffect(()=>{
    const getRecipe = async () =>{
      const res = await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${id}`)
      const data = await res.json()
      setRecipe(data)
    }

    getRecipe();
    
    
  },[])

  useEffect (()=>{
    if(favorite){
      localStorage.setItem("favorite", favorite.strMeal)
    }

  }, [favorite])

  const handleClick = (recipe) => {
    setFavorite(recipe)
    navigate(`/Favorites`);
  };

  return (
    <>
        <div key={recipe.idMeal}>
                    <h3 className="selected">{recipe.strMeal}</h3>
                    <p>Recipe ID#: {recipe.idMeal}</p>
                    <button onClick={()=>handleClick(recipe)}>Favorite</button>
                </div>
        </>
    )
}

export default Recipe