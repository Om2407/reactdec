import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)

  const btnClicked =() =>{
    setNum(prev => (prev+5))
  
    setNum(prev => (prev+5))
  
    setNum(prev => (prev+5))
  
  }
  function reset() {
    setNum(0)
  }
  return (
    <div>
      <h1 className='title' color='aqua'>Hello</h1>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click me</button>
      <button onClick={reset} >Reset</button>
    </div>
  )
}

export default App
