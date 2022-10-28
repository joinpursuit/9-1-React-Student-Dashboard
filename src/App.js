import React, { useState } from "react";
import data from "./data/data.json";
import AllStudents from "./Components/AllStudents";
import CohortList from "./Components/CohortList";
import "./App.css";

function App() {
  const [displayedStudents, setDisplayedStudents] = useState(data);
  const [displayCohort, setDisplayCohort] = useState("All Students");
  const [notes, setNotes] = useState(
    data.map((student) => ({ ...student.notes[0], id: student.id }))
  );
  // console.log(notes)

  return (
    <div className="Wrapper">
			
      <header className="navbar">
        <h1> Student Dashboard</h1>
      </header>
      <aside className="cohortlist">
         
				<CohortList
          setDisplayedStudents={setDisplayedStudents}
          setDisplayCohort={setDisplayCohort}
        /> 
				<img
            className="gif"
            src="https://media4.giphy.com/media/kvazz2A4Pa2LHDMzwZ/giphy.gif"
            alt="extragif"
          />
        {/* <img className="braingif" src="https://i0.wp.com/media3.giphy.com/media/bZmVvb3gFjtak149u1/source.gif" alt="braingif"/> */}

      </aside>

      <main className="allstudent">
        <div>
          <h2>{displayCohort}</h2>
          <h3>Total Students: {displayedStudents.length}</h3>
        </div>
        <section className="allStudentCard">
          <div className="eachstudentcard">
            <AllStudents
              students={displayedStudents}
              notes={notes}
              setNotes={setNotes}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
