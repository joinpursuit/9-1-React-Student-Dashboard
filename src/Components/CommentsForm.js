import { useState } from "react";

export default function CommentsForm({ addComment }) {
  const [inputComment, setInputComment] = useState({
    commenter: "",
    comment: "",
  });

  const { commenter, comment } = inputComment;

  const handleInputChange = (e) => {
    setInputComment({ ...inputComment, [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    addComment(inputComment);
    setInputComment({
      commenter: "",
      comment: "",
    });
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="commenterName">Commenter Name </label>
      <input
        id="commenter"
        type="text"
        value={commenter}
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="inputComments">Comments </label>
      <input
        id="comment"
        type="text"
        value={comment}
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
