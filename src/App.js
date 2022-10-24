import { useState } from "react";
import data from './data/data.json';
import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Main from "./Components/Main";
import "./App.css"

function App() {
const [students, setStudents] = useState(data)
const [allCohortCodes,setAllCohortCodes] = useState(getCohortCode())
const [cohorts, setCohorts] = useState('')
const [selected, setSelected] = useState('')
const [studentCohort,setStudentCohort] = useState(studentByCohort())
let updatedCohortCodes = []

function getCohortCode() {
  let arr = []
  for (let i = 0; i < students.length; i++) {
    if (!arr.includes(students[i].cohort.cohortCode)) {
      arr.push(students[i].cohort.cohortCode)
    } 
  }
  return arr.sort()
}
//to do list
// 1. show more button when clicked 
// 2. fix notes
// 3. add percent goals
// 4. change Font
// 5. sort aside

function handleCohortCodesSpace() {
  for (let i = 0; i < allCohortCodes.length; i++) {
    let split = allCohortCodes[i].split('')
    let year = split.splice(split.length - 4)
    updatedCohortCodes.push(split.join('') + " " + year.join(''))
    console.log(updatedCohortCodes)
    }
    return updatedCohortCodes
}

function studentByCohort() {
  let studentByCohort = {}
for (let i = 0; i < students.length; i++) {
   if (!studentByCohort[students[i].cohort.cohortCode]) {
    studentByCohort[students[i].cohort.cohortCode] = [students[i]]
   }else{
    studentByCohort[students[i].cohort.cohortCode].push(students[i])
   }
}
return studentByCohort
}

function handleUpdatedCohort(cohort) {
  if (studentCohort.hasOwnProperty(cohort)){
        setCohorts(cohort)
        setSelected(studentCohort[cohort]) 
       }else{
        setCohorts('')
        setSelected(students) 
       }  
}


// console.log(allCohortCodes.sort((a, b) => a-b))


  return (
    <div className="wrapper">
     <Header />
     <Aside 
     allCohortCodes={allCohortCodes} 
    //  updateAllStudentsButton={updateAllStudentsButton}
     handleCohortCodesSpace={handleCohortCodesSpace()} 
     updatedCohortCodes={updatedCohortCodes} 
     handleUpdatedCohort={handleUpdatedCohort}
     />
     <Main 
     students={students} 
     cohorts={cohorts}
     selected={selected}
     />
    </div>
  );
}

export default App;
