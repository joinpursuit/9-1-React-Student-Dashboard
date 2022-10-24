import data from "./data/data.json"
import AllStudents from "./components/AllStudents"
import StartDate from "./components/StartDate"
import Header from "./components/Header"

function App() {
  console.log(data)
  return (
    <div>
      <Header />
      <main>
        <StartDate />
        <AllStudents data={data} />
      </main>
    </div>
  )
}

export default App
