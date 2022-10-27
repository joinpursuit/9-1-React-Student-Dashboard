import React from 'react';
import { useState } from 'react';
import Cohorts from './Components/Cohorts';
import data from "./data/data"
import Students from './Components/Students';


function App() {

  const[students, setStudents] = useState(data)
 
  


  return (
    <div>
      <div className="overall-container">
          <header>
            <h1>Student Dashboard</h1>
          </header>
          
          <div className="second-container">
            <aside className="cohort-list" >
              <div><h2>Choose a Class By Start Date</h2></div>
              <div> <Cohorts /></div>
            </aside>
            <main className="selected-students">
              <div> <h2>All Students</h2></div>
              <div> <Students students={students} /></div>
            </main>
          </div>
      </div>
    </div>
  );
}

export default App;
