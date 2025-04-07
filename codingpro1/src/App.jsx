import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <nav>
     <div className='logo'>
      <img src="../vite.svg" alt="logo" />
    </div>
    <ul>
      <li>Menu</li>
      <li>Location</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <button className='login'>login</button>
    </nav>
    <Hero/>
    </>
  )
}

export default App
