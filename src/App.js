import { useState } from "react";
import data from "./data/data.json";

// Components
import Student from "./Components/Student";
import Cohorts from "./Components/Cohorts";
import "./App.css";

function App() {
  // Create shallow copy of data
  const studentsData = [...data];

  // Map method returns array of cohortCodes for all students
  const mappedStudentsToCohortCode = studentsData.map(
    (student) => student.cohort.cohortCode
  );

  // Use set constructor and new operator to create a new array and filter out only the unique cohortCodes
  const uniqueCohorts = [...new Set(mappedStudentsToCohortCode)];

  // State for App
  const [cohort, setCohort] = useState(null);

  function chooseCohort(cohort) {
    setCohort(cohort);
  }

  return (
    <div className="app">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main className="main">
        <aside>
          {"<aside />"}
          <Cohorts uniqueCohorts={uniqueCohorts} chooseCohort={chooseCohort} />
        </aside>
        <div className="students">
          <h2>All Students</h2>
          <p>Total: 250</p>
          {!cohort
            ? studentsData.map((student) => (
                <Student key={student.id} student={student} />
              ))
            : studentsData
                .filter((student) => {
                  return student.cohort.cohortCode === cohort;
                })
                .map((student) => (
                  <Student key={student.id} student={student} />
                ))}
        </div>
      </main>
    </div>
  );
}

export default App;
