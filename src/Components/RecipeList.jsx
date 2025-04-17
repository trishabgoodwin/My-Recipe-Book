import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function RecipeList() {
  const [recipes, setRecipes] = useState([])

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/Recipe/${id}`);
  };
  

  useEffect(()=>{
    const getRecipes = async () =>{
      const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
      const data = await res.json()

      console.log(data);
      setRecipes(data)
    }

    getRecipes();

  },[])

  return (
    <>
    <h1>Here Are Some Recipes!</h1>
    <p>Click on a recipe to see ingredients and directions!
        Users can save favorite recipes!</p>
    {
            recipes.map((recipe)=>
                <div key={recipe.idMeal}>
                    <h3 onClick={() => {handleClick(recipe.idMeal)}}>{recipe.strMeal}</h3>
                </div>
            )
        }

    </>
  )
}

export default RecipeList