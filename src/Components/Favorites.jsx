import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Recipe from './Recipe';

function Favorites() {
    const [favorite, setFavorite] = useState(localStorage.getItem("favorite") || {})
  if (!localStorage.getItem("token")){
    return (<p>Please sign up to add your favorites!</p>)
  }  
  
  return (
    <>
        <div key={favorite?.idMeal}>
        <h3>{favorite}</h3>
        <Link to="/">Back To Home</Link>
        <button onClick={()=> setFavorite(null)}>Remove Favorite</button>
        </div>
    </>
  )
}

export default Favorites