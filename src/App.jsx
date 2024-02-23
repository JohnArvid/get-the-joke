import { useState } from 'react'
import GetJokeButton from './components/get-joke-button/get-joke-button.component.jsx'
import JokeDisplay from './components/joke-display/joke-display.component.jsx'
import './App.css'


function App() {
  const [joke, setJoke] = useState('Get joke by pressing button')
  /* Replace url with actual url to fetch joke from https://v2.jokeapi.dev/ */
  const apiUrl = 'https://api.example.com/jokes/random';


  const getJokeFromAPI = () => {
      // Make the API call using fetch
    fetch(apiUrl)
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Handle the data
        console.log(data);
        // Display the joke on the webpage or in the console
        const joke = data.joke;
        setJoke(joke);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching joke:', error);
      })
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
