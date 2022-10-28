import React from "react"
import { useState } from "react"

function CohortStartDate({ students, setselectCohort }) {
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
    setselectCohort(e.target.innerText)
  }

  return (
    <div>
      <aside className="Class-selection">
        <h2>Choose a Class by Start Date</h2>
        <button onClick={cohortClick}> All Students </button>
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
