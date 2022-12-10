import React from "react"
import { useState } from "react"
import StudentList from "./StudentList"

function ShowDetails({ student, toggleSetShowMe }) {
  const [selectNotes, setSelectNotes] = useState(student.notes)
  const [comment, setComment] = useState("")
  const [commenter, setCommenter] = useState("")
  const [showMe, setShowMe] = useState(false)

  function toggleSetShowMe() {
    setShowMe(!showMe)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(selectNotes)
    addNotes()
    formReset()
  }

  function addNotes() {
    const dash = {
      // ...selectNotes,
      Commenter: commenter,
      Comments: comment,
    }
    selectNotes.push(dash)
  }

  function formReset() {
    setComment("")
    setCommenter("")
  }

  const [button, setButton] = useState(false)

  return (
    <div>
      <button
        className="showButton"
        onClick={toggleSetShowMe}
        style={{ color: `${!showMe ? "green" : "red"}` }}
      >
        {!showMe ? (
          <span className="show-hide-tag show" title="Show More....">
            Show More....
          </span>
        ) : (
          <span className="show-hide-tag hide" title="Show Less..">
            Show Less....
          </span>
        )}
      </button>

      {showMe ? (
        <section className="info">
          <article>
            <h3>Codewars</h3>
            <p>
              <span>Current Total: </span>

              {student.codewars.current.total}
            </p>
            <p>
              <span>Last week: </span>
              {student.codewars.current.lastWeek}
            </p>
            <p>
              <span>Goal: </span>
              {student.codewars.goal.total}
            </p>
            <p>
              <span>Percent of Goal Achieved: </span>
              {(
                (Number(student.codewars.current.total) /
                  Number(student.codewars.goal.total)) *
                100
              ).toFixed(0)}
              %
            </p>
          </article>

          <article>
            <h3>Scores</h3>
            <p>
              <span>Assignments: </span>
              {student.cohort.scores.assignments * 100}%
            </p>
            <p>
              <span>Projects: </span>
              {student.cohort.scores.projects * 100}%
            </p>
            <p>
              <span>Assessments: </span>
              {student.cohort.scores.assessments * 100}%
            </p>
          </article>
          <article>
            <h3>Certifications</h3>
            <p>
              <span>Resume:</span>
              {student.certifications.resume ? "✔" : "❌"}
            </p>
            <p>
              <span>linkedin:</span>
              {student.certifications.linkedin ? "✔" : "❌"}
            </p>
            <p>
              <span> Mock Interview:</span>
              {student.certifications.mockInterview ? "✔" : "❌"}
            </p>
            <p>
              <span>GitHub:</span>
              {student.certifications.github ? "✔" : "❌"}
            </p>
          </article>
          <section>
            <article className="notes-list">
              <h4>1-on-1 Notes</h4>
              <form onSubmit={handleSubmit} className="form">
                {" "}
                <label htmlFor="commenterName">
                  Commenter:{" "}
                  <input
                    type="text"
                    name="commenter name"
                    onChange={(e) => setCommenter(e.target.value)}
                    value={commenter}
                  />
                </label>
                <br></br>
                <label htmlFor="comment">
                  Comment: <br></br>
                  <input
                    type="text"
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                  />
                </label>
                <button
                  className="button_notes"
                  onClick={handleSubmit}
                  type="submit"
                  style={{
                    color: button ? "blue" : "white",
                    backgroundColor: button ? "red" : "green",
                  }}
                >
                  {/* add hide and show to make red and green appear */}
                  Add Notes
                </button>
              </form>
              <ul className="note">
                {selectNotes.map((notes) => {
                  return (
                    <li key={notes.id}>
                      {/* say appears on the first student but no else gotta figure out why when redoing css */}
                      {notes.Commenter} says, "{notes.Comments}"
                    </li>
                  )
                })}
              </ul>
            </article>
          </section>
        </section>
      ) : null}
    </div>
  )
}
export default ShowDetails
