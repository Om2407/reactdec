import React from 'react'

const Card = (props) => {
    console.log(props)
    
  return (
    <div>   <div className="card">
        <h1>Hi,Om Gupta this side</h1>
      <h2>{props.user},{props.age}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profile</button>
      </div>
      <div className="pic">
        <h1>Hi,CHN this side</h1>
      <h2>{props.user},{props.age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis.</p>
         <button>View Profile</button>
      </div></div>
  )
}

export default Card
