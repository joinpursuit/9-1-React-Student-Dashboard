import { useState } from 'react';
import './Form.css';

function Form({ el }) {
  const [comment, setComment] = useState('');
  const [commenter, setCommenter] = useState('');
  const [newComment, setNewComment] = useState(el.notes);

  function handleSubmit(e) {
    e.preventDefault();
    addNote();
    setCommenter('');
    setComment('');
  }

  function addNote() {
    const newObj = { ...newComment, commenter: commenter, comment: comment };
    newComment.push(newObj);
  }
  return (
    <article className="form-article">
      <hr />
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleSubmit} className="comment-form">
        <label>Commenter name</label>
        <input
          onChange={(e) => setCommenter(e.target.value)}
          type="text"
          name="commenter"
          id="commenter"
          value={commenter}
        />
        <label>Comment</label>
        <input
          onChange={(i) => setComment(i.target.value)}
          type="text"
          name="comment"
          id="comment"
          value={comment}
        />
        <button onClick={handleSubmit} className="add-note" type="submit">
          Add Note
        </button>
      </form>
      <ul>
        {newComment.map((notes) => {
          return (
            <li>
              {notes.commenter} says, {notes.comment}
            </li>
          );
        })}
        {addNote}
      </ul>
    </article>
  );
}

export default Form;
