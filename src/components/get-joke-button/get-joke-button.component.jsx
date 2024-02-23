import './get-joke-button.styles.css'

const GetJokeButton = ({getJoke}) => {
  return (
    <div className="get-joke-button" onClick={getJoke}>
      <button type='button'>Get joke</button>
    </div>
  )
}

export default GetJokeButton;