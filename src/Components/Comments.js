import "./Comments.css";

export default function Comments({ comments }) {
  return (
    <div className="commentsContainer">
      <h4>Comments</h4>
      <ul className="">
        {comments.map((comment, idx) => {
          return (
            <li key={idx}>
              {comment.commenter} says, "{comment.comment}"
            </li>
          );
        })}
      </ul>
    </div>
  );
}
