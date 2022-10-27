import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import StartDate from "./components/StartDate"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [dataList, setData] = useState(data)

  return (
    <div className="container">
      <Header />
      <aside>
        <StartDate key={dataList.id} dataList={dataList} />
      </aside>
      <main>
        <StudentsList key={dataList.id} dataList={dataList} />
      </main>
    </div>
  )
}

export default App
