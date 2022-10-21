import "./comments.css"

const comments = ({info, newComment}) => {
  return(
    <div>
        <ul>
            {info.notes.map((comments) =>{
                return(
                    <li className="comments">{comments.commenter} {comments.comment}</li>
                )
            })}
            {newComment.map(({commenter, comment}) => {
              return (
                <li className="comments">{commenter} {comment}</li>
              )
            })}
        </ul>
    </div>
  )
}

export default comments