

const comments = ({info, newComment}) => {
  return(
    <div>
        <ul>
            {info.notes.map((comments) =>{
                return(
                    <li>{comments.commenter} {comments.comment}</li>
                )
            })}
            {newComment.map(({commenter, comment}) => {
              return (
                <li>{commenter} {comment}</li>
              )
            })}
        </ul>
    </div>
  )
}

export default comments