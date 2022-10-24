import data from "./data/data.json"
import StudentsList from "./components/StudentsList"
import StartDate from "./components/StartDate"
import Header from "./components/Header"

function App() {
  console.log(data)
  return (
    <div>
      <Header />
      <main>
        <StartDate />
        <StudentsList data={data} />
      </main>
    </div>
  )
}

export default App
