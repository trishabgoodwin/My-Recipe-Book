import { useState } from "react"

function Auth({token, setToken}){
    const [auth, setAuth] = useState({})
    const [localToken, setLocalToken] = useState(localStorage.getItem("token") || null)


    async function handleCheck(){
        try{
            setLocalToken(localStorage.getItem("token"))
            const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/me",
            {
                method: "GET",
                headers:{
                    "Content-type": "application/json",
                    Authorization: `Bearer ${localToken}`
                }
            })
            const result = await response.json()
            console.log(result)
            setAuth(result)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <button onClick={handleCheck}>Check for SignUp</button>
        {localToken?
        <div>
            <h2>Your token is {localToken}</h2>
            <h2>Your username is {auth?.username}</h2>
        </div>
        :
        <h2>You are not signed in! Please sign up!</h2>    
    }
        </>
    )
}

export default Auth