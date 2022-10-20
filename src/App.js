import { useState } from "react";
import data from './data/data.json';
import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Main from "./Components/Main";
import "./App.css"

function App() {
const [students, setStudents] = useState(data)
const [cohorts,setCohorts] = useState(updateCohort())

function updateCohort() {
  let arr = []
  for (let i = 0; i < students.length; i++) {
    if (!arr.includes(students[i].cohort.cohortCode)) {
      arr.push(students[i].cohort.cohortCode)
    } 
  }
  return arr
}

function updateCohortWithStudents() {
  
}
console.log(cohorts)
  return (
    <div className="wrapper">
     <Header />
     <Aside cohorts={cohorts}/>
     <Main students={students}/>

    </div>
  );
}

export default App;
