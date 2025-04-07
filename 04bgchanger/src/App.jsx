import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
  <div className="h-screen w-full"
    style={{ backgroundColor : color}}>
      <div className="fixed flex flex-wrap bottom-12 justify-center w-full px-4 py-3">
        <div className="flex flex-wrap justify-center bg-amber-50 rounded-xl shadow-lg text-center px-3 py-2 gap-3">
          <button 
          onClick={() => setcolor("red")}
          className='bg-red-500 rounded-xl px-4'>red</button>
          <button 
          onClick={() => setcolor("orange")}
          className='bg-orange-500 rounded-xl'>orange</button>
          <button
          onClick={() => setcolor("yellow")}
          className='bg-yellow-500 rounded-xl'>yellow</button>
          <button
          onClick={() => setcolor("green")}
          className='bg-green-500 rounded-xl'>green</button>
          <button
          onClick={() => setcolor("blue")}
          className='bg-blue-500 rounded-xl'>blue</button>
        
        </div>
      </div>
  </div>
  )
}

export default App
