import React, { useState } from "react";

function Notes({ student, notes, setNotes }) {
  const [user, setUser] = useState({
    commenterNameSubmit: "",
    commentSubmit: "",
  });

  const addNote = (commenterName, comment) => {
    setNotes([
      ...notes,
      {
        id: student.id,
        commenter: commenterName,
        comment,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user.commenterNameSubmit, user.commentSubmit);
    addNote(user.commenterNameSubmit, user.commentSubmit);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <h3 className="notesh3">Leave a Note</h3>
      <form onSubmit={handleSubmit}>
        <label html="commenterNameSubmit">Commenter Name</label>
        <input
          id="commenterNameSubmit"
          type="text"
          value={user.commenterNameSubmit}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="commentSubmit">Comment</label>
        <input
          id="commentSubmit"
          type="text"
          value={user.commentSubmit}
          onChange={handleChange}
        />
        <div>
          <input className="addBtn" type="submit" />
        </div>
      </form>
      <ul>
        {notes
          .filter((note) => note.id === student.id)
          .map((note, i) => (
            <div>
              {note.commenter && (
                <li key={i}>
                  <p>
                    {note.commenter} says {note.comment}
                  </p>
                </li>
              )}
            </div>
          ))}
      </ul>
    </div>
  );
}

export default Notes;
