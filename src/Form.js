import { useState } from 'react';
import './Form.css';

function Form() {
  const [comment, setComment] = useState('');
  const [commenter, setCommenter] = useState('');

  function handleInput(e) {
    e.preventDefault();
    // console.log('hello');
    console.log(e.target.value);
  }
  return (
    <article className="form-article">
      <hr />
      <h4>1-on-1 Notes</h4>
      <form className="comment-form">
        <label>Commenter name</label>
        <input
          onChange={(e) => setCommenter(e.target.value)}
          type="text"
          name="commenter"
          id="commenter"
          value={commenter}
        />
        <label>Comment</label>
        <input type="text" name="comment" id="comment" value={comment} />
        <button
          onClick={() => handleInput()}
          className="add-note"
          type="submit"
        >
          Add Note
        </button>
      </form>
      <ul></ul>
    </article>
  );
}

export default Form;
