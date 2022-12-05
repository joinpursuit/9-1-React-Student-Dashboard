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
    addNotes()
    formReset()
  }

  function addNotes() {
    const dash = {
      ...selectNotes,
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
        <section>
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
          <section className="">
            <article className="notes-list">
              <h4>1-on-1 Notes</h4>
              <form onSubmit={handleSubmit}>
                <label htmlFor="commenterName">
                  Commenter Name
                  <input
                    type="text"
                    name="commenter name"
                    onChange={(el) => setCommenter(el.target.value)}
                    value={commenter}
                  />
                </label>
                <br></br>
                <label htmlFor="comment">
                  Comment
                  <input
                    type="text"
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                  />
                </label>
                <br></br>
                <button
                  className="button"
                  onClick={handleSubmit}
                  type="submit"
                  style={{
                    color: button ? "blue" : "white",
                    backgroundColor: button ? "red" : "green",
                  }}
                >
                  Add Notes
                </button>
              </form>
              <ul className="note">
                {selectNotes.map((note) => {
                  return (
                    <li key={note.id}>
                      {note.commenter} {note.comment}
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
