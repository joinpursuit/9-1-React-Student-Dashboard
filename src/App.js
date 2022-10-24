import { useState } from 'react';
import data from './data/data.json'
import StudentList from "./Components/StudentList";
import CohortList from './Components/CohortList';





function App() {
  // Declare state for selected students
  const [students, setStudents] = useState(data)
  // Declare State for CohortName
  const [cohortName, setCohortName] = useState("All Students")
  // Declare state for showMoreButton
  const [showMore, SetShowMore] = useState()



  return (
    <div className='topLevel'>
      <header>
        <h1>Destiny's Student Dashboard</h1>
      </header>
      
      <main>
      
      <div className="studentList">
        <h2
        style={{margin: "0"}}>{cohortName}</h2>
        <p>Total Students: 
          <span style={{color: "green"}}> {students.length}</span></p> 
        
      <StudentList
      students = {students} />
      </div>

      <aside className="cohortList">
        <h2
        style={{
          marginTop:"0",
        }}
        >Choose Class by Start Date</h2>
        <CohortList
        data = {data}
        student = {students}
        setStudents = {setStudents}
        setCohortName = {setCohortName} />
      </aside>
      
      </main>

      

      <footer>FOOTER</footer>
     
    </div>
  );
}

export default App;
