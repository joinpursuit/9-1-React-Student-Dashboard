import React from "react"
import { useState } from "react"

function StartDate({ dataList }) {
  const [cohort, setCohort] = useState()

  //   const filteredStudents = dataList.filter((student) => {
  //     console.log("student info", dataList.cohort.cohortCode)
  //     // return student.cohort.cohortCode === dataList.cohort.cohortCode
  //     return " hi"
  //   })

  //   function cohortClick(dataList) {
  //     setCohort(filteredStudents)
  //   }

  return (
    <div>
      <aside className="Class-selection">
        <h2>Choose a Class by Start Date</h2>
        <ul>
          {dataList.map((datalists) => {
            // <button>AllStudents</button>
            return (
              <div key={datalists.id}>
                <button> All Students </button>
                <li>
                  <button>Class Start</button>
                </li>
              </div>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}

export default StartDate
