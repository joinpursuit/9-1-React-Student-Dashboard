import { useState } from "react";

export default function Form() {
  const [note, setNote] = useState("");

  return (
    <article id="notes-list">
      <h4>1-on-1 Notes</h4>
      <form id="notes-formt">
        <label htmlFor="">
          Commenter Name:
          <input type="text" name="commenter" value="{}"></input>
        </label>

        <label htmlFor="">
          Comment:
          <input type="text" name="comment" value="{}"></input>
        </label>
        <button type="submit">Add</button>
      </form>
    </article>
  );
}
