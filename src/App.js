import { useState } from 'react';
import data from './data/data.json'
import StudentList from "./Components/StudentList";
import CohortList from './Components/CohortList';





function App() {
  // Declare state for selected students
  const [students, setStudents] = useState(data)
// Declare state for showMoreButton
const [showMore, SetShowMore] = useState()



  return (
    <div className='topLevel'>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      
      <main>
      
      <div className="studentList">
        <h2
        style={{margin: "0"}}>Cohort</h2>
        Total Students:
        {/* <div>
        <h4>Li item Name</h4>
        <span>total :</span>
        </div> */}
      <StudentList
      data = {data} />
      </div>

      <aside className="cohortList">
        <h2
        style={{
          marginTop:"0",
          // top: "-80px",
          // position: "relative",
        }}
        >Choose Class by Start Date</h2>
        <CohortList
        data = {data} />
      </aside>
      
      </main>

      

      <footer>FOOTER</footer>
     
    </div>
  );
}

export default App;
