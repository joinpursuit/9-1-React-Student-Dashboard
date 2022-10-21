import data from "./data/data.json"
import Header from "./Components/Header"
import Classes from "./Components/Classes"
import Students from "./Components/students"
import Additionalinfo from "./Components/AdditionalInfo"
import {useState} from "react"
import "./App.css"


function App() {
 
const [student] = useState(data)

const [studentClass , setStudentClass] = useState([])

function handleStudents(students){
  setStudentClass([...students])
}

const [cohort, setChort] = useState([])

function handleCohort(classes){
  setChort([...cohort, classes])
}

//  student.forEach((students) => {
//   if(students.cohort.cohortCode.includes("Winter2025")){
//     console.log(students.names.preferredName)
//   }
//  })

  return (
    <div className="container">
      <header>
        <Header/>
      </header>
      <aside>
        <Classes handleStudents={handleStudents} studentClass={studentClass} student={student} handleCohort={handleCohort} cohort={cohort}></Classes>
        <main>
        <Students cohort={cohort} Additionalinfo={Additionalinfo} studentClass={studentClass} student={student}/>
        </main>
      </aside>
    </div>
  );
}

export default App;
