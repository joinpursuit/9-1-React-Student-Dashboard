import data from "./data/data.json"
import Header from "./Components/Header"
import Classes from "./Components/Classes"
import Students from "./Components/students"
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

  return (
    <div className="container">
      <header>
        <Header/>
      </header>
      <br></br>
      <aside>
        <Classes 
        handleStudents={handleStudents} 
        studentClass={studentClass} 
        student={student} 
        handleCohort={handleCohort} 
        cohort={cohort}/>
        <main>
        <Students 
        student={student} 
        studentClass={studentClass} 
        cohort={cohort}/>
        </main>
      </aside>
    </div>
  );
}

export default App;
