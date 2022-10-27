import React from "react"
import { Form } from "react-bootstrap"
import { useState } from "react"

function ShowDetails({ dataList, toggleSetShowMe }) {
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
      <button onClick={toggleSetShowMe}>
        Show me
        {!showMe ? "show me details" : "hide show me details"}
      </button>

      {showMe ? (
        <section>
          <article>
            <h3>Codewars</h3>
            <p>
              <span>Current Total:</span>
              {dataList.codewars.current.total}
            </p>
            <p>
              <span>Last week:</span>
              {dataList.codewars.lastweek}
            </p>
            <p>
              <span>Goal:</span>
              {dataList.codewars.goal.total}
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
              {dataList.cohort.scores.assignments}
              {"%"}
            </p>
            <p>
              <span>Projects:</span>
              {dataList.cohort.scores.projects}
              {"%"}
            </p>
            <p>
              <span>Assessments:</span>
              {dataList.cohort.scores.assesments}
              {"%"}
            </p>
          </article>
          <article>
            <h3>Certifications</h3>
            <p>
              <span>Resume:</span>
              {dataList.certifications.resume}
              {}
            </p>
            <p>
              <span>lindedin:</span>
              {dataList.certifications.linkedin}
              {}
            </p>
            <p>
              <span> Mock Interview:</span>
              {dataList.certifications.mockInterview}
              {}
            </p>
            <p>
              <span>GitHub:</span>
              {dataList.certifications.github}
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
