import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Ujwal Shrestha"
  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Happy Learning</h2>
    </div>
    
  )
}

export default App
