import { useState } from 'react';
import data from './data/data.json'
import StudentList from "./Components/StudentList";
import CohortList from './Components/CohortList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import GraduateDropdown from './Components/GraduateDropdown';


function App() {
  // Declare state for selected students
  const [students, setStudents] = useState(data)
  // Declare State for CohortName
  const [cohortName, setCohortName] = useState("All Students")
  // Declare state for toggling searchbar/dropdown resets
  const [clickReset, setClickReset] = useState(false)


  return (
    <div className='topLevel'>
      
      <header>
        <Header />
        <NavBar />
      </header>
      
      <main>
      
      <div className="studentList">
        <div className='studentListHeader'>
          <h2
          style={{margin: "0"}}>{cohortName}</h2>
          <p>Total Students: 
          <span style={{color: "green"}}> {students.length}</span>
          </p> 
          
          <p>
            <SearchBar
          data = {data}
          setStudents = {setStudents}
          setCohortName = {setCohortName}
            />
          </p>

          <GraduateDropdown
          students = {students}
          setStudents = {setStudents}
          data = {data} 
          clickReset = {clickReset}
          setClickReset = {setClickReset}/>
        </div>
        
        <div className='scrollStudents'>
        <StudentList
        students = {students}
        setStudents = {setStudents}
        data = {data}
        setCohortName = {setCohortName} />
        </div>
      
      </div>

      <aside className="cohortList">
        <h2
        style={{
          marginTop:"0",
        }}>Choose Class by Start Date</h2>
        <CohortList
        data = {data}
        setStudents = {setStudents}
        setCohortName = {setCohortName}
        setClickReset = {setClickReset}
        />
      </aside>
      
      </main>
      
      <Footer />
     
    </div>
  );
}

export default App;
