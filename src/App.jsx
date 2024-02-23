import { useState } from 'react'
import JokeDisplay from './components/joke-display/joke-display.component.jsx'
import './App.css'

function App() {
  const [joke, setJoke] = useState(0)

  return (
    <>
      <h1>Get the joke</h1>
      <JokeDisplay joke = {joke}/>
    </>
  )
}

export default App
