import React from 'react'

const App = () => {

  function inputChanging(elem){
    console.log(elem);
  }
  return (
    <div>
      <input 
      onClick={function(elem){
        inputChanging(elem.target.value)
      }}
       />
    </div>




  //   <div>
  //  <button onClick={function(){
  //   console.log("hello guys")
  //  }}>click button</button>

  //   </div>
  )
}

export default App
