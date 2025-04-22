import { useState } from "react";
import Auth from "./Auth";

function SignUp({token,setToken}){
    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")
    const [error, setError] =useState("")

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
                const result = await response.json()
                console.log(result);
                setToken(result.token)
        }catch(error){
            console.log(error)
            setError(error.response?.data?.message || 'Network error. Please try again.');
        }
    }
    return (
        <>
        <div className="error">
            {error && <p>${error}</p>}
        </div>
        <div>
            <form onSubmit={handleSubmit}>
            <label>
            Username
                <input name="username" onChange={(event)=> setUsername(event.target.value)}
                value={username}
                />
            </label>
            <label>
            Password
            <input name="password" onChange={(event)=> setPassword(event.target.value)}
            value={password}
            />
            </label>
            <button>Sign Up!</button>
            </form>
        </div>  
        </>
    )
  }
  
  export default SignUp;

