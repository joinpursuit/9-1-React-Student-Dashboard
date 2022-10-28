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

  // triangle
  // Declare State to store user inputted search
  const [search, setSearch] = useState("")
  // Declare State for selection value
  const [select, setSelect] = useState("all")

  // Declare state for search data
  const [searchResult, setSearchResult] = useState(data)


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
            setStudents = {setStudents}
            search = {search}
            setSearch = {setSearch}
            searchResult = {searchResult}
            setSearchResult = {setSearchResult}
            />
          </p>

          <GraduateDropdown
          students = {students}
          setStudents = {setStudents}
          data = {data} 
          select = {select}
          setSelect = {setSelect}
          setSearch = {setSearch}
          cohortName = {cohortName}
          searchResult = {searchResult}
          setSearchResult = {setSearchResult}
         />
        </div>
        
        <div className='scrollStudents'>
        <StudentList
        students = {students}
        setStudents = {setStudents}
        data = {data}
        setCohortName = {setCohortName}
        setSearchResult = {setSearchResult}
        setSelect = {setSelect}
        setSearch = {setSearch} />
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
        setSearch = {setSearch}
        setSelect = {setSelect}
        setSearchResult = {setSearchResult}
        />

      </aside>
      
      </main>
      
      <Footer />
     
    </div>
  );
}

export default App;
