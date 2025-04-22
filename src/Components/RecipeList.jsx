import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function RecipeList(favorite, setFavorite) {
  const [recipes, setRecipes] = useState([])

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/Recipe/${id}`);
  };
  

  useEffect(()=>{
    const getRecipes = async () =>{
      const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
      const data = await res.json()

      setRecipes(data)

    }

    getRecipes();

  },[])

  return (
    <>
    <h1>Here Are Some Recipes!</h1>
    <p>Click on a recipe to see the Meal ID!<br/>
        Search above using the ID for recipe instructions!<br/>
        Users can save favorite recipes- Sign up today!</p>
    {
            recipes.map((recipe)=>
                <div key={recipe.idMeal}>
                    <h3 onClick={() => {handleClick(recipe.idMeal)}}>{recipe.strMeal}</h3>
                    <img src={recipe?.strMealThumb} style={{height:"200px"}}/>
                </div>
            )
        }

    </>
  )
}

export default RecipeList