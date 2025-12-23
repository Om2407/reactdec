import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num , setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function jumpto5Num(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jumpto5Num}>jump to 5</button>
    </div>
  )
}

export default App