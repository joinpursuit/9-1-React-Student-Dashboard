import allStudents from './data/data.json'
import Classes from './Components/Classes'
import Students from './Components/Students';
import { useState } from 'react';
import './app.css'


function App() {

  //Defining state variables
  const [cohort, setCohort] = useState("All Students")
  const [students, setStudents] = useState(allStudents)
  const [showDetails, setShowDetails] = useState(false)

  //Declaring studentArr variable used to update students state
  let studentArr = []

  //Function to update cohort and students state when cohort button clicked
  const handleClick = (cohort) => {
    setCohort(cohort.replaceAll('20', ' 20')) 
    updateStudents(cohort)
  }

  const updateStudents = (cohort) => {
    allStudents.map((student) => {
      if (student.cohort.cohortCode === cohort){
        studentArr.push(student)
      }
    
    setStudents(studentArr)
    })
  }

  //Function to update states when "All Students" clicked
  const showAll = () => {
    setStudents(allStudents)
    setCohort("All Students")
  }

  return (
    <div>
    <header>
      <h1>Student Dashboard</h1>
    </header>
    <main>
      <aside>
        <Classes
          allStudents={allStudents}
          handleClick={handleClick}
          showAll={showAll}
        />
      </aside>
      <section>
        <Students
          students={students}
          cohort={cohort}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      </section>
    </main>
    </div>
  );
}

export default App;
