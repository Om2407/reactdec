import Button from './components/Button'
import Navbar from './components/Navbar'
import ThemeContext from './context/ThemeContext'  // Changed this line

const App = () => {
  return (
    <ThemeContext>
      <div>
        <Navbar />
        <Button />
      </div>
    </ThemeContext>
  )
}

export default App