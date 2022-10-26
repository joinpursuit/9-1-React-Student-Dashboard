import { useState } from "react";

export default function Form({ record }) {
  const [notes, setNotes] = useState(record.notes);
  // console.log(notes);
  //* bird project
  const [comment, setComment] = useState("");
  const [commenter, setCommenter] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleComment = (note) => {
    setNotes([...notes, note]);
  };
  return (
    <article id="notes-list">
      <h4>1-on-1 Notes</h4>
      <form id="notes-formt" onSubmit={handleSubmit}>
        <label htmlFor="commenter">
          Commenter Name:
          <input
            onChange={(event) => setCommenter(event.target.value)}
            id="commenter"
            type="text"
            name="commenter"
            value={commenter}
          ></input>
        </label>

        <label htmlFor="comment">
          Comment:
          <input
            onChange={(event) => setComment(event.target.value)}
            id="comment"
            type="text"
            name="comment"
            value={comment}
          ></input>
        </label>
        <button type="submit">Add</button>
      </form>
      <section>
        {notes.map((note) => {
          return (
            <li>
              <p>
                {note.commenter} says: {note.comment}
              </p>
            </li>
          );
        })}
      </section>
    </article>
  );
}
