import React, { useState } from "react";
import data from "./data/data.json";
import AllStudents from "./Components/AllStudents";
import CohortList from "./Components/CohortList";
import "./App.css";


function App() {
  const [displayedStudents, setDisplayedStudents] = useState(data);
	const [displayCohort, setDisplayCohort] = useState('All Students')
  const [notes, setNotes] = useState(data.map((student) => ({...student.notes[0], id: student.id})));
// console.log(notes)


  return (
    <div className="Wrapper">
      <header className="navbar">
        <h1>Student Dashboard</h1>
      </header>
			<aside className="cohortlist">
         <CohortList setDisplayedStudents={setDisplayedStudents} setDisplayCohort={setDisplayCohort}/>
      </aside>			
			<main className="allstudent">
					<div>
				   <h2>{displayCohort}</h2>
           <h3>Total Students: {displayedStudents.length}</h3>		
					</div>
          <section>
            <AllStudents
              students={displayedStudents} notes={notes} setNotes={setNotes}
            />
          </section>
        </main>
			 </div>
        
  );
}

export default App;
