import { useState } from 'react'
import GetJokeButton from './components/get-joke-button/get-joke-button.component.jsx'
import JokeDisplay from './components/joke-display/joke-display.component.jsx'
import './App.css'


function App() {
  const [joke, setJoke] = useState(0)
  const getJokeFromAPI = () => {
  //  .then(setJoke(??))
  }

  return (
    <>
      <h1>Get the joke</h1>
      <JokeDisplay joke = {joke}/>
      <GetJokeButton getJoke = {getJokeFromAPI}/>
    </>
  )
}

export default App
