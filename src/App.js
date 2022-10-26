import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import StartDate from "./components/StartDate"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [dataList, setData] = useState(data)
  const [showMe, setShowMe] = useState(false)

  function toggleSetNewShowMe() {
    setShowMe(!showMe)
  }

  return (
    <div>
      <Header />
      <aside>
        <StartDate dataList={dataList} />
      </aside>
      <main>
        <StudentsList
          key={dataList.id}
          dataList={dataList}
          toggleSetNewShowMe={toggleSetNewShowMe}
        />
      </main>
    </div>
  )
}

export default App
