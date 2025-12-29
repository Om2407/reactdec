import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

const App = () => {
  const[a, setA] = useState(0)
  const[b, setB] = useState(0)

  function aChanging(){
    console.log('a ki value change hogyi')
  }
  function bchanging(){
    console.log('b ki value change hogyi')
  }
  useEffect(function(){
    aChanging()
  },[a])

  useEffect(function(){
    bchanging()
  },[b])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => setA(a+1)}>click on A</button>
      <button onClick={() => setB(b-1)}>click on B</button>
    </div>
  )
}

export default App
