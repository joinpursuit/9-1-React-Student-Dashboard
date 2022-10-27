import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import CohortStartDate from "./components/CohortStartDate"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [dataList, setData] = useState(data)
  const [selectCohort, setselectCohort] = useState()

  return (
    <div className="container">
      <Header />
      <aside className="cohort">
        <CohortStartDate
          key={dataList.id}
          dataList={dataList}
          selectCohort={selectCohort}
          setselectCohort={setselectCohort}
        />
      </aside>
      <main>
        <StudentsList key={dataList.id} dataList={dataList} />
      </main>
    </div>
  )
}

export default App
