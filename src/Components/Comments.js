export default function Comments({ comments }) {
  return (
    <div>
      <h4>Comments</h4>
      <ul className="comments">
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
