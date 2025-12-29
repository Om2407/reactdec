import axios from 'axios'
import {useState} from 'react'

const App = () => {

  const [data, setData] = useState([]); // Changed to []

  const getData = async ()=> {
    const response = 
    await axios.get('https://jsonplaceholder.typicode.com/todos') // Removed /1
    setData(response.data)
  }
  
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3 key={idx}>Title: {elem.title}</h3> // Added key, changed property
        })}
      </div>
    </div>
  )
}

export default App