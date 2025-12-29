import React from 'react'

const App = () => {
  const user = {
    username: 'john_doe',
    age: 30,
    city: 'New York'

  }
  localStorage.setItem('userData', JSON.stringify(user))
  const data = localStorage.getItem('userData')
  console.log(data)
  return (
    <div>
      App
    </div>
  )
}

export default App
