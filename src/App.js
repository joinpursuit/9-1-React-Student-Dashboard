import { useState } from "react";
import data from "./data/data.json";

// Primary Components
import Student from "./Components/Student";
import Cohorts from "./Components/Cohorts";

import "./App.css";

function App() {
  // Create shallow copy of data
  const studentsData = [...data];

  // Map studentsData array into an array of each student's cohortCode
  const mappedStudentsToCohortCode = studentsData.map(
    (student) => student.cohort.cohortCode
  );

  // Use set constructor and new operator to create a new array and filter out only the unique cohortCodes
  const uniqueCohorts = [...new Set(mappedStudentsToCohortCode)];

  // State for App
  const [students, setStudents] = useState([...data]);
  const [cohort, setCohort] = useState("All Students");
  const [totalStudents, setTotalStudents] = useState(studentsData.length);

  function chooseCohort(cohort) {
    setCohort(cohort);
    setTimeout(
      () => setTotalStudents(document.getElementsByClassName("student").length),
      250
    );
  }

  // Formatting Algorithm
  function formatCohortName(cohort) {
    return cohort.split(20).join(" 20");
  }

  return (
    <div className="app">
      <header>
        <h1>Student Dashboard Project</h1>
      </header>
      <main className="main">
        <aside>
          {"<aside />"}
          <Cohorts
            formatCohortName={formatCohortName}
            uniqueCohorts={uniqueCohorts}
            chooseCohort={chooseCohort}
          />
        </aside>
        <div className="students">
          <h2>{formatCohortName(cohort)}</h2>
          <p>Total: {totalStudents}</p>
          {cohort === "All Students"
            ? students.map((student) => (
                <Student key={student.id} student={student} />
              ))
            : students
                .filter((student) => student.cohort.cohortCode === cohort)
                .map((student) => (
                  <Student key={student.id} student={student} />
                ))}
        </div>
      </main>
    </div>
  );
}

export default App;
