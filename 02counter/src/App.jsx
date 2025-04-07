import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(15)
    // let counter = 15;
    const Addvalue = () => {
      setCount(counter+1);
    }
    const Removevalue = () => {
      setCount(counter-1);
    }
  return (
    <>
    <h1>coffee aur code</h1>
    <h2>counter value: {counter} </h2>
    <button
    onClick={Addvalue}>Add value</button>
    <button
    onClick={Removevalue}>Remove value</button>
    </>
  )
}

export default App
