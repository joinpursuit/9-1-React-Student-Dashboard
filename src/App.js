import allStudents from './data/data.json'
import Classes from './Components/Classes'
import Students from './Components/Students';
import { useState } from 'react';
import './app.css'


function App() {
  const [cohort, setCohort] = useState("")
  const [students, setStudents] = useState(allStudents)
  let studentArr = []

  const handleClick = (cohort) => {
    setCohort(cohort) 
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

  const showAll = () => {
    setStudents(allStudents)
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
          cohort={cohort}
          setCohort={setCohort}
          handleClick={handleClick}
          showAll={showAll}
        />
      </aside>
      <section>
        <Students
          students={students}
          cohort={cohort}
          setStudents={setStudents}
          // updateStudents={updateStudents}
        />
      </section>
    </main>
    </div>
  );
}

export default App;
