import React from "react"
import { Form } from "react-bootstrap"
import { useState } from "react"
import StudentsList from "./StudentsList"

function ShowDetails({ students, toggleSetShowMe }) {
  const [select, setSelect] = useState("")
  const [showMe, setShowMe] = useState(false)
  function toggleSetShowMe() {
    setShowMe(!showMe)
  }
  function handleSelectChange(e) {
    setSelect(e.target.value)
  }

  return (
    <div>
      <button
        onClick={toggleSetShowMe}
        style={{ color: `${!showMe ? "green" : "red"}` }}
      >
        Show me
        {/* {!showMe ? (
          <span className="show-hide-tag show" title="Show me...">
            Details
          </span>
        ) : (
          <span className="show-hide-tag hide" title="hide me...">
            Hide
          </span>
        )} */}
      </button>

      {showMe ? (
        <section>
          <article>
            <h3>Codewars</h3>
            <p>
              <span>Current Total:</span>
              {students.codewars.current.total}
            </p>
            <p>
              <span>Last week:</span>
              {students.codewars.lastweek}
            </p>
            <p>
              <span>Goal:</span>
              {students.codewars.goal.total}
            </p>
            <p>
              <span>Percent of Goal Achieved:</span>
              {}
              {}
            </p>
          </article>

          <article>
            <h3>Scores</h3>
            <p>
              <span>Assignments:</span>
              {students.cohort.scores.assignments}
              {"%"}
            </p>
            <p>
              <span>Projects:</span>
              {students.cohort.scores.projects}
              {"%"}
            </p>
            <p>
              <span>Assessments:</span>
              {students.cohort.scores.assesments}
              {"%"}
            </p>
          </article>
          <article>
            <h3>Certifications</h3>
            <p>
              <span>Resume:</span>
              {students.certifications.resume}
              {}
            </p>
            <p>
              <span>lindedin:</span>
              {students.certifications.linkedin}
              {}
            </p>
            <p>
              <span> Mock Interview:</span>
              {students.certifications.mockInterview}
              {}
            </p>
            <p>
              <span>GitHub:</span>
              {students.certifications.github}
              {}
            </p>
          </article>
          <section cls>
            <article className="notes-list">
              <h4>1-on-1 Notes</h4>
              <Form onSubmit={handleSelectChange}>
                <label htmlFor="commenterName">
                  Commenter Name
                  <input type="text" name="tom" />
                </label>
                <label htmlFor="commenter">
                  Commenter
                  <input type="text" name="tom" />
                </label>
                <button>Add Notes</button>
              </Form>
              <ul>
                <li className="note"></li>
              </ul>
            </article>
          </section>
        </section>
      ) : null}
    </div>
  )
}

export default ShowDetails
