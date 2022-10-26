import { useState } from "react";
import "./CommentForm.css";

export default function CommentForm({ notes, person }) {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addNotes();
    formReset();
  }

  function formReset() {
    setComment("");
    setCommenter("");
  }

  function addNotes() {
    const newNote = {
      commenter: commenter,
      comment: comment,
    };
    // console.log(newNote);
    // console.log(notes);
    notes.push(newNote);
  }

  return (
    <article className="notes">
      <h4>1-1 Notes</h4>
      <form id="notesForm" onSubmit={handleSubmit}>
        <label>
          Commenter Name:
          <input
            type="text"
            name="commenter"
            value={commenter}
            onChange={(e) => setCommenter(e.target.value)}
          ></input>
        </label>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></input>
        </label>
        <button className="formButton" type="submit">
          Add Note 😊
        </button>
      </form>
      <ul>
        {person.notes.map((note, i) => {
          return (
            <li key={i}>
              - {note.commenter} says {note.comment}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
