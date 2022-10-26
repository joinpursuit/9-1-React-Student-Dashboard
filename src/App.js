import { useState } from 'react';
import data from './data/data.json'
import StudentList from "./Components/StudentList";
import CohortList from './Components/CohortList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';


function App() {
  // Declare state for selected students
  const [students, setStudents] = useState(data)
  // Declare State for CohortName
  const [cohortName, setCohortName] = useState("All Students")


  return (
    <div className='topLevel'>
      
      <header>
        <Header />
        <NavBar />
      </header>
      
      <main>
      
      <div className="studentList">
        <h2
        style={{margin: "0"}}>{cohortName}</h2>
        <p>Total Students: 
          <span style={{color: "green"}}> {students.length}</span>
        </p> 
        <SearchBar
        students = {students}
        setStudents = {setStudents} />
        <StudentList
        students = {students}
        setStudents = {setStudents}
        data = {data}
        setCohortName = {setCohortName} />
        </div>

      <aside className="cohortList">
        <h2
        style={{
          marginTop:"0",
        }}>Choose Class by Start Date</h2>
        <CohortList
        data = {data}
        setStudents = {setStudents}
        setCohortName = {setCohortName} />
      </aside>
      
      </main>
      
      <Footer />
     
    </div>
  );
}

export default App;
