import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import CohortStartDate from "./components/CohortStartDate"
import Header from "./components/Header"
import { useState } from "react"
import ShowDetails from "./components/ShowDetails"

function App() {
  const [students, setStudent] = useState(data)
  const [selectCohort, setSelectCohort] = useState("AllStudents")
  const [selectCohortCode, setselectedCohortCode] = useState("All Students")
  const [defaultStudents, setDefaultStudents] = useState(data)

  function cohortHandler(cohortCode) {
    let formatted = cohortCode.replace(" ", "")
    const filteredStudents = defaultStudents.filter(
      (student) => formatted === students.cohort.cohortCode
    )

    setStudent((previous) => {
      return [...filteredStudents]
    })
    setselectedCohortCode(cohortCode)
  }

  return (
    <div className="container">
      <Header />
      <aside className="cohortstartdate">
        <CohortStartDate students={students} cohortHandler={cohortHandler} />
      </aside>
      <main>
        <StudentsList
          key={students.id}
          students={students}
          selectCohort={selectCohort}
          ShowDetails={ShowDetails}
        />
      </main>
    </div>
  )
}

export default App
