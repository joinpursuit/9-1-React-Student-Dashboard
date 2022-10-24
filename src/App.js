import data from "./data/data.json"
import Header from "./Components/Header"
import Classes from "./Components/Classes"
import Students from "./Components/students"
import Additionalinfo from "./Components/AdditionalInfo"
import {useState} from "react"
import "./App.css"


function App() {
 
const [student, setStudent] = useState(data)

const [allStudent, setAllStudent] = useState([])


const [studentClass , setStudentClass] = useState([])

function handleStudents(students){
  setStudentClass([...students])
}

const [cohort, setChort] = useState([])

function handleCohort(classes){
  setChort([...cohort, classes])
}



  return (
    <div className="container">
      <header>
        <Header/>
      </header>
      <aside>
        <Classes setAllStudent={setAllStudent}setStudent={setStudent}handleStudents={handleStudents} studentClass={studentClass} student={student} handleCohort={handleCohort} cohort={cohort}></Classes>
        <main>
        <Students Additionalinfo={Additionalinfo} studentClass={studentClass} student={student} cohort={cohort}/>
        </main>
      </aside>
    </div>
  );
}

export default App;
