import React from "react"
import { Form } from "react-bootstrap"
import { useState } from "react"
import StudentList from "./StudentList"

function ShowDetails({ student, toggleSetShowMe }) {
  const [select, setSelect] = useState("")

  const [showMe, setShowMe] = useState(false)
  function toggleSetShowMe() {
    setShowMe(!showMe)
  }
  function handleSelectChange(e) {
    setSelect(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    alert("submitted")
  }

  return (
    <div>
      <button
        onClick={toggleSetShowMe}
        style={{ color: `${!showMe ? "green" : "red"}` }}
      >
        Show me
        {!showMe ? (
          <span className="show-hide-tag show" title="Show me"></span>
        ) : (
          <span className="show-hide-tag hide" title="hide me"></span>
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
              {student.codewars.current.lastweek}
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
              ).toFixed(2)}{" "}
              %
            </p>
          </article>

          <article>
            <h3>Scores</h3>
            <p>
              <span>Assignments: </span>
              {student.cohort.scores.assignments}
              {}%
            </p>
            <p>
              <span>Projects: </span>
              {student.cohort.scores.projects} %
            </p>
            <p>
              <span>Assessments: </span>
              {student.cohort.scores.assessments} %
            </p>
          </article>
          <article>
            <h3>Certifications</h3>
            <p>
              <span>Resume:</span>
              {student.certifications.resume ? "✔" : "❌"}
            </p>
            <p>
              <span>lindedin:</span>
              {student.certifications.linkedin ? "✔" : "❌"}
            </p>
            <p>
              <span> Mock Interview:</span>
              {student.certifications.mockInterview ? "✔" : "❌"}
              {}
            </p>
            <p>
              <span>GitHub:</span>
              {student.certifications.github ? "✔" : "❌"}
              {}
            </p>
          </article>
          <section cls>
            <article className="notes-list">
              <h4>1-on-1 Notes</h4>
              <Form onSubmit={handleSubmit}>
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
