import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import CohortStartDate from "./components/CohortStartDate"
import Header from "./components/Header"
import { useState } from "react"
import ShowDetails from "./components/ShowDetails"

function App() {
  const [dataList, setData] = useState(data)
  const [selectCohort, setselectCohort] = useState("AllStudents")

  return (
    <div className="container">
      <Header />
      <aside className="cohortstartdate">
        <CohortStartDate
          key={dataList.id}
          dataList={dataList}
          setselectCohort={setselectCohort}
        />
      </aside>
      <main>
        <StudentsList
          key={dataList.id}
          dataList={dataList}
          selectCohort={selectCohort}
          ShowDetails={ShowDetails}
        />
      </main>
    </div>
  )
}

export default App
