import './get-joke-button.styles.css'

const GetJokeButton = ({clickHandler}) => {
  return (
    <div className="get-joke-button" onClick={clickHandler}>
      <button type='button'>Get joke</button>
    </div>
  )
}

export default GetJokeButton;