import { useState } from "react";
import data from "./data/data.json";
import Student from "./Components/Student";
import Cohorts from "./Components/Cohorts";
import "./App.css";

function App() {
  const studentsData = [...data];
  const mappedStudentsToCohortCode = studentsData.map(
    (student) => student.cohort.cohortCode
  );
  const uniqueCohorts = [...new Set(mappedStudentsToCohortCode)];

  const [cohort, setCohort] = useState(["All cohorts"]);

  function chooseCohort(cohort) {
    setCohort(cohort);
  }

  return (
    <div className="app">
      <header>Student Dashboard</header>
      <main className="main">
        <aside>
          {"<aside />"}
          <Cohorts uniqueCohorts={uniqueCohorts} chooseCohort={chooseCohort} />
        </aside>
        <div className="students">
          <h2>All Students</h2>
          <p>Total: 250</p>
          {studentsData.map((student) => (
            <Student key={student.id} student={student} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
