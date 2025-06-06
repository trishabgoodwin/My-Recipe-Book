import { useState } from "react";
import Auth from "./Auth";

function LogIn({token,setToken}){
    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/login",
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
                if (result.token){
                    localStorage.setItem("token", result.token)
                    setToken(result.token)

                }
                
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
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
            <button>Login!</button>
            </form>
            <div>
                <Auth token={token} />
            </div>
        </>
    );
  }
  
  export default LogIn;