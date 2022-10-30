import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./ShowDetails.css";

export function ShowDetails({ el, Data }) {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [notesArray, setNotesArray] = useState(el.notes);

  function handleSubmit(e) {
    e.preventDefault();
    if (!commenter || !comment) {
      alert("Please make sure you put your name and a message");
    } else {
      //make a new obj that holds the values of comment and commenter
      const newObj = { commenter: commenter, comment: comment };

      //use setNotes function to add to the notes array without losing the other comments in the array
      setNotesArray([...notesArray, newObj]);
      setCommenter("");
      setComment("");
    }
  }

  return (
    <section className="details">
      <article className="codewars">
        <h3>Codewars:</h3>
        <p>
          <span>Current Total: </span>
          {el.codewars.current.total}
        </p>
        <p>
          <span>Last Week: </span>
          {el.codewars.current.lastWeek}
        </p>
        <p>
          <span>Goal: </span>
          {el.codewars.goal.total}
        </p>
        <p>
          <span>Percent of Goal Achieved: </span>
          {Math.floor(
            (el.codewars.current.total / el.codewars.goal.total) * 100
          )}
          %
        </p>
      </article>
      <article className="scores">
        <h3>Scores</h3>
        <p>
          <span>Assignments: </span>
          {Math.floor(el.cohort.scores.assignments * 100)}%
        </p>
        <p>
          <span>Projects: </span>
          {Math.floor(el.cohort.scores.projects * 100)}%
        </p>
        <p>
          <span>{Math.floor(el.cohort.scores.assessments * 100)}%</span>
        </p>
      </article>
      <article className="certifications">
        <h3>Certifications</h3>
        <p>
          <span>Resume: </span>
          <span>
            {el.certifications.resume === false ? (
              <FaTimesCircle id="timesemoji" />
            ) : (
              <FaCheckCircle id="checkemoji" />
            )}
          </span>
        </p>
        <p>
          <span>LinkedIn: </span>
          <span>
            {el.certifications.linkedin === false ? (
              <FaTimesCircle id="timesemoji" />
            ) : (
              <FaCheckCircle id="checkemoji" />
            )}
          </span>
        </p>
        <p>
          <span>Mock Interview: </span>
          <span>
            {el.certifications.mockInterview === false ? (
              <FaTimesCircle id="timesemoji" />
            ) : (
              <FaCheckCircle id="checkemoji" />
            )}
          </span>
        </p>
        <p>
          <span>GitHub: </span>
          <span>
            {el.certifications.github === false ? (
              <FaTimesCircle id="timesemoji" />
            ) : (
              <FaCheckCircle id="checkemoji" />
            )}
          </span>
        </p>
      </article>
      <article className="notes">
        <h4>1-on-1 Notes</h4>
        <form className="form">
          <label>
            Commenter Name
            <input
              type="text"
              name="commenter"
              id="commenter"
              value={commenter}
              onChange={(e) => setCommenter(e.target.value)}
            ></input>
          </label>
          <label>
            Comment
            <input
              type="text"
              name="comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></input>
          </label>
          <button type="submit" onClick={handleSubmit}>
            Add Note
          </button>
        </form>
        <ul>
          {notesArray.map((note) => {
            return (
              <li>
                {note.commenter} says, {note.comment}
              </li>
            );
          })}
          {handleSubmit}
        </ul>
      </article>
    </section>
  );
}
