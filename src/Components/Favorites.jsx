import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Recipe from './Recipe';
import { useParams } from 'react-router-dom';

function Favorites() {
    const [favorite, setFavorite] = useState(localStorage.getItem("favorite") || [])
  if (!localStorage.getItem("token")){
    return (<p>Please sign up to add your favorites!</p>)
  }  
  
const navigate = useNavigate();

const handleClick = () => {
  navigate(`/`);
};

  return (
    <>
        <div key={favorite?.idMeal}>
        <h3 className="favorite">{favorite}</h3>
        <button onClick={()=> handleClick()}>Go Home</button>
        <button onClick={()=> setFavorite(null)}>Remove Favorite</button>
        </div>
    </>
  )
}

export default Favorites
