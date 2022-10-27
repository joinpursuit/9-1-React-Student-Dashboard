import allStudents from './data/data.json'
import Classes from './Components/Classes'
import Students from './Components/Students';
import { useState } from 'react';
import './app.css'


function App() {

  //Defining state variables
  const [cohort, setCohort] = useState("All Students")
  const [students, setStudents] = useState(allStudents)
  const [comments, setComments] = useState([])

  //Declaring studentArr variable used to update students state
  let studentArr = []

  //Functions to update cohort and students state when cohort button clicked
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

  //Function to add and store comments added to instructor notes
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(e.target.id)

        const newComment = {
            [e.target.id]: {
                name: e.target.name.value,
                comment: e.target.comment.value
                }
            }

        setComments([...comments, newComment])
    }

  //Rendering of App component
  return (
    <div>
    <header>
      <h1>Student Dashboard</h1>
    </header>
    <main>
      <aside id="sidebar">
        <Classes
          allStudents={allStudents}
          handleClick={handleClick}
          showAll={showAll}
        />
      </aside>
      <section id="students">
        <Students
          students={students}
          cohort={cohort}
          comments={comments}
          handleSubmit={handleSubmit}
        />
      </section>
    </main>
    </div>
  );
}

export default App;
