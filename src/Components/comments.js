import "./comments.css"

const comments = ({comment}) => {
  return(
    <div>
    {comment.map(({comment, commenter}) => {
      return(
        <li>{commenter} says, "{comment}"</li>
      )
    })}
    </div>
  )
}

export default comments