import { useState } from 'react'

function App() {
  // const [Name, setName] = useState();
  const [count, setCount] = useState(0);
  // const updateName = () => {
  //   setName("vansh khurana")
  // }
  const increase = () => {
    setCount(count + 1);
  }
  const deacrese = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  return ( 
    <>
    <h1>COUNT : {count}</h1>
    <button onClick={increase}>increase</button>
    <button onClick={deacrese}>deacrese</button>
    <button onClick={reset}>reset</button>
    {/* <h2>Name:{Name}</h2>
    <button onClick={() => updateName()}>
      Update Name
    </button> */}
    </>
  )
}

export default App
