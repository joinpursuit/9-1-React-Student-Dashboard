import React from "react"
import { useState } from "react"

function CohortStartDate({ dataList, setselectCohort }) {
  let yearTwentySix = ["Winter2026", "Fall2026", "Summer2026", "Spring2026"]
  let yearTwentyFive = ["Winter2025", "Fall2025", "Summer2025", "Spring2025"]

  function cohortClick(e) {
    setselectCohort(e.target.innerText)
    console.log(e)
  }

  return (
    <div>
      <aside className="Class-selection">
        <h2>Choose a Class by Start Date</h2>
        <ul>
          <button onClick={cohortClick}> All Students </button>
          <hr></hr>
          {yearTwentySix.map((season) => {
            return (
              <li>
                <button onClick={cohortClick}>{season}</button>
                <hr></hr>
              </li>
            )
          })}
          {yearTwentyFive.map((season) => {
            return (
              <li>
                <button onClick={cohortClick}>{season}</button>
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
