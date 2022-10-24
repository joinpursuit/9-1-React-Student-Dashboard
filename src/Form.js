import './Form.css';

function Form() {
  return (
    <article className="form-article">
      <hr />
      <h4>1-on-1 Notes</h4>
      <form className="comment-form">
        <label>
          Commenter name
          <input type="text" name="commenter" />
        </label>
        <label>
          Comment
          <input type="text" name="comment" />
        </label>
        <button className="add-note" type="submit">
          Add Note
        </button>
      </form>
      <ul></ul>
    </article>
  );
}

export default Form;
