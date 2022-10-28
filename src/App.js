import data from "./data/data.json"
import StudentList from "./components/StudentList"
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
      (student) => student.cohort.cohortCode === formatted
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
        <CohortStartDate
          students={students}
          onShortCodeChange={cohortHandler}
        />
      </aside>
      <main>
        <StudentList
          students={students}
          selectedShortCode={selectedShortCode}
          ShowDetails={ShowDetails}
        />
      </main>
    </div>
  )
}

export default App
