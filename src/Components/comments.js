import "./comments.css"

const comments = ({comment}) => {
  return(
    <div>
    {comment.map(({comment, commenter}) => {
      return(
        <li key={comment}className="comments">{commenter} says, "{comment}"</li>
      )
    })}
    </div>
  )
}

export default comments