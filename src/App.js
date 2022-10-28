import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import CohortStartDate from "./components/CohortStartDate"
import Header from "./components/Header"
import { useState } from "react"
import ShowDetails from "./components/ShowDetails"

function App() {
  const [students, setStudents] = useState(data)
  const [selectedShortCode, setSelectedShortCode] = useState("All Students")
  const [defaultStudents, setDefaultStudents] = useState(data)

  function cohortHandler(cohortCode) {
    let formatted = cohortCode.replace(" ", "")
    const filteredStudents = defaultStudents.filter(
      (student) => students.cohort.cohortCode === formatted
    )

    setStudents((previous) => {
      return [...filteredStudents]
    })
    setSelectedShortCode(cohortCode)
  }

  return (
    <div className="container">
      <Header />
      <aside className="cohortstartdate">
        <CohortStartDate students={students} cohortHandler={cohortHandler} />
      </aside>
      <main>
        <StudentsList
          students={students}
          selectedShortCode={selectedShortCode}
          ShowDetails={ShowDetails}
        />
      </main>
    </div>
  )
}

export default App
