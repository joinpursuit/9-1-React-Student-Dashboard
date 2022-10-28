import React from 'react'
import filterStudentsByCode from '../utils/filter'
import data from "../data/data.json";
import "./CohortList.css"

function CohortList({setDisplayedStudents, setDisplayCohort}) {
const handleClick = (data, cohort, displayAllStudents = false) => {
    if(displayAllStudents) {
        setDisplayedStudents(data)
    } else {
        setDisplayedStudents(filterStudentsByCode(data, cohort.split(' ').join('')))
    }
 
 setDisplayCohort(cohort)
}
  return (
    <div > 
    <div className='cohortlisth2'>
    <h2>Cohort by Start Date</h2>
    </div>
    <div className='cohortlist'>
      <li onClick={() => handleClick(data, 'All Students', true)}>All Students</li>
      <li Click={() => handleClick(data, 'Winter 2025')}>Winter 2025</li>
      <li onClick={() => handleClick(data, "Fall 2025")}>Fall 2025</li>
      <li onClick={() => handleClick(data, "Summer 2025")}>Summer 2025</li>
      <li onClick={() => handleClick(data, "Spring 2025")}>Spring 2025</li>
      <li onClick={() => handleClick(data, "Winter 2026")}>Winter 2026</li>
      <li onClick={() => handleClick(data, "Fall 2026")}>Fall 2026</li>
      <li onClick={() => handleClick(data, "Summer 2026")}>Summer 2026</li>
      <li onClick={() => handleClick(data, "Spring 2026")}>Spring 2026</li>
    </div>
    </div>
  )
}

export default CohortList