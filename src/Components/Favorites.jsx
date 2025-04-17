import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Favorites() {
  const [favorite, setFavorite] = useState([])
  if (!localStorage.getItem("token")){
    return (<p>No Token</p>)
  }

  return (
    <>
   

    </>
  )
}

export default Favorites