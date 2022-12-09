import React from "react"
import { useState } from "react"

function CohortStartDate({ data, setStudents, onShortCodeChange }) {
  let years = [
    "Winter 2025",
    "Fall 2025",
    "Summer 2025",
    "Spring 2025",
    "Winter 2026",
    "Fall 2026",
    "Summer 2026",
    "Spring 2026",
  ]

  function cohortClick(e) {
    onShortCodeChange(e.target.innerText)
  }

  //resetted All Students using original state from app.js

  function handleAllCohort(e) {
    onShortCodeChange(e.target.innerText)
    setStudents(data)
  }

  return (
    <div>
      <aside className="Class-selection">
        <h2>Choose a Class by Start Date</h2>
        <button onClick={handleAllCohort} name="all students">
          {" "}
          All Students{" "}
        </button>

        <ul className="button-list">
          {years.map((year) => {
            return (
              <li key={year}>
                <button onClick={cohortClick}>{year}</button>
                <hr></hr>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}

export default CohortStartDate
