import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import CohortStartDate from "./components/CohortStartDate"
import Header from "./components/Header"
import { useState } from "react"
import ShowDetails from "./components/ShowDetails"

function App() {
  const [students, setStudent] = useState(data)
  const [selectCohort, setselectCohort] = useState("AllStudents")
  const [selectshortCode, setselectedShortcode] = useState("All Students")
  const [defaultStudents, setDefaultStudents] = useState(data)

  return (
    <div className="container">
      <Header />
      <aside className="cohortstartdate">
        <CohortStartDate
          students={students}
          setselectCohort={setselectCohort}
        />
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
