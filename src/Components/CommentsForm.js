import { useState } from "react";

import "./CommentsForm.css";

export default function CommentsForm({ student, addComment }) {
  const [inputComment, setInputComment] = useState({
    commenter: "",
    comment: "",
  });

  const { commenter, comment } = inputComment;

  function handleInputChange(e) {
    setInputComment({ ...inputComment, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addComment(student, inputComment);
    setInputComment({
      commenter: "",
      comment: "",
    });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h4>1-on-1 Notes</h4>
      <div>
        <label className="label" htmlFor="commenter">
          Commenter Name:{" "}
        </label>
        <input
          id="commenter"
          type="text"
          value={commenter}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <br></br>
      <div>
        <label className="label" htmlFor="comment">
          Comment:{" "}
        </label>
        <textarea
          id="comment"
          rows="5"
          cols="auto"
          value={comment}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <br></br>
      <button type="submit">Add Note</button>
    </form>
  );
}
