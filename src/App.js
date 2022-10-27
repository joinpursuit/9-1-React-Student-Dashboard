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
  const [newComment, setNewComment] = useState(
      {
        id: "",
        name: "",
        comment: ""
        }
    )

  const [darkMode, setDarkMode] = useState(false)

  //Declaring studentArr variable used to update students state
  let studentArr = []

  // const newComment = 
  //   {
  //     [e.target.id]: {
  //         name: "",
  //         comment: ""
  //         }
  //   }

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

  //Function to update comments on text box change
  const handleChange = (e) => {

    setNewComment(
      {...newComment, id: e.target.form.id, [e.target.name]:e.target.value}
    )
  }

  //Functions to add and store comments from instructor notes then reset form
    const handleSubmit = (e) => {
        e.preventDefault()

        setComments([...comments, newComment])
        reset()
    }

    const reset = () => {
      setNewComment(
        {
          name: "",
          comment: ""
        }
      )
    }

    const setMode = () => {
      setDarkMode(!darkMode)
      console.log(darkMode)
    }

  //Rendering of App component
  return (
    <div className={darkMode ? "dark" : null}>
    <header>
      <h1>Student Dashboard</h1>
      <button id="bar" onClick={setMode}>  </button>
      <p id="slider"> </p>
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
          newComment={newComment}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
    </main>
    </div>
  );
}

export default App;
