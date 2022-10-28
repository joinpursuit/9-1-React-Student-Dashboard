import studentData from "./data/data.json"
import Students from "./components/Students";
import "./index.css"
import Cohorts from "./components/Cohorts";
import { useState } from "react";


function App() {
  const [filteredStudents, setFilteredStudents] = useState([...studentData])
  const [selectedClass, setSelectedClass] = useState("All Students")
  const seasons = {
    "Winter": 1,
    "Fall": 2,
    "Summer": 3,
    "Spring": 4
  }
  function handleFilter (event) {
    event.preventDefault()
    let filtered = []
    if (event.target.textContent === "All Students") {
      filtered = studentData
    } else {
    let classYear = event.target.textContent.replace(" ","")
    for (const student of studentData) {
      if (student.cohort.cohortCode === classYear) {
        filtered.push(student)
      }
    }
  }
    setSelectedClass(event.target.textContent)
    setFilteredStudents([...filtered])
  }

  let years = []
  for (const student of studentData) {
    let cohortCode = student.cohort.cohortCode
    cohortCode = cohortCode.substring(0, cohortCode.length - 4) + " " + cohortCode.slice(cohortCode.length - 4)
    years.push(cohortCode)
  }
  let filteredYears = years.filter((item, i, ar) => ar.indexOf(item) === i);


  function sortYears (years) {
     let sortedYears = years.sort((a,b) => {
      return (
        b.substring(b.length - 4, b.length) - a.substring(a.length - 4, a.length) 
      )
    })
    return sortedYears
  }
  sortYears(filteredYears)

 filteredYears.sort((a, b) => {
  let aa = a.split(' ');
  let bb = b.split(' ');
  return aa[1] - bb[1] || seasons[aa[0]] - seasons[bb[0]];
});

  return (
    <div>
      <h1>Good Noodles of Pursuit</h1>
      <Cohorts filteredYears={filteredYears} studentData={studentData} handleFilter={handleFilter}/>
      <Students studentData={filteredStudents} selectedClass={selectedClass}/>
    </div>
  );
}

export default App;
