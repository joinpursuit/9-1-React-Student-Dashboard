export default function Comments({ student }) {
  return (
    <ul className="comments">
      {student.notes.map((note, idx) => {
        return (
          <li key={idx}>
            {note.commenter} says, "{note.comment}"
          </li>
        );
      })}
    </ul>
  );
}
