export default function Comments({ comments }) {
  return (
    <ul className="comments">
      {comments.map((comment, idx) => {
        return (
          <li key={idx}>
            {comment.commenter} says, "{comment.comment}"
          </li>
        );
      })}
    </ul>
  );
}
