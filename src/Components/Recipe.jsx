import { Routes, Route, Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Recipe() {
const [recipe, setRecipe] = useState([])
const {id} = useParams()

  useEffect(()=>{
    const getRecipe = async () =>{
      const res = await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${id}`)
      const data = await res.json()

      console.log(data);
      setRecipe(data)
    }

    getRecipe();

  },[])

  return (
    <>
        <div key={recipe.idMeal}>
                    <h3>{recipe.strMeal}</h3>
                    <p>{recipe.strInstructions}</p>
                </div>
        </>
    )
}

export default Recipe