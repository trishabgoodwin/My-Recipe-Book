import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>My Recipe Book</h1>
      <p>Here are all of our recipes:</p>
    </>
  )
}

export default App
