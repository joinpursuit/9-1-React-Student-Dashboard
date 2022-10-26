import { useState } from "react";

export default function CommentForm() {
  return (
    <article className="notes">
      <h4>1-1 Notes</h4>
      <form id="notesForm">
        <label>
          Commenter Name
          <input type="text" name="commenter" value=""></input>
        </label>
        <label>
          Comment
          <input type="text" name="comment" value=""></input>
        </label>
        <button type="submit">Add Note</button>
      </form>
      <ul>
        <li></li>
      </ul>
    </article>
  );
}
