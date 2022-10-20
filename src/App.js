import data from './data/data.json'
import StudentList from "./Components/StudentList";





function App() {




  return (
    <div>
      <h1>Student Dashboard</h1>

      <div className="studentList">
      <StudentList
      data = {data} />
      </div>
     
    </div>
  );
}

export default App;
