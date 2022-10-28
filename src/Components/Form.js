import { useState } from "react";

export default function Form({ record, notes, setNotes }) {
  //* bird project
  const [comment, setComment] = useState("");
  const [commenter, setCommenter] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addComment();
    setComment("");
    setCommenter("");
  }
  function addComment() {
    // event.preventDefault();
    const createComment = {
      ...notes,
      comment: comment,
      commenter: commenter,
    };
    notes.push(createComment);
  }

  return (
    <article id="notes-list">
      <h4>1-on-1 Notes</h4>
      <form id="notes-form" onSubmit={handleSubmit}>
        <label htmlFor="commenter">
          Commenter Name:{" "}
          <input
            onChange={(e) => setCommenter(e.target.value)}
            id="commenter"
            type="text"
            name="commenter"
            value={commenter}
          ></input>
        </label>
        <br />
        <label htmlFor="comment">
          Comment:{" "} 
          <input
            onChange={(e) => setComment(e.target.value)}
            id="comment"
            type="text"
            name="comment"
            value={comment}
          ></input>
    
        </label>
        <br /> <br />
        <button className="Add" type="submit">
          Add
        </button>
      </form>
      <section>
        {record.notes.map((note) => {
          return (
            <div key={note.id}>
              <li>
                {note.commenter} says: {note.comment}
              </li>
            </div>
          );
        })}
      </section>
    </article>
  );
}
