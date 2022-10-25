import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import StartDate from "./components/StartDate"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [dataList, setData] = useState(data)

  console.log(dataList)
  return (
    <div>
      <Header />
      <aside>
        <StartDate />
      </aside>
      <main>
        <StudentsList dataList={dataList} />
      </main>
    </div>
  )
}

export default App
