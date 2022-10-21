import { useState } from "react";
import Cohorts from "./Components/Cohorts";
import "./App.css";

import data from "./data/data.json";

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
        <aside className="cohortsList">
          <h2>Choose a Class by Start date</h2>
          <Cohorts uniqueCohorts={uniqueCohorts} chooseCohort={chooseCohort} />
        </aside>
        <div className="students">
          <h2>All Students</h2>
          <p>Total: 250</p>
          <div>Student1</div>
          <div>Student1</div>
          <div>Student1</div>
          <div>Student1</div>
        </div>
      </main>
    </div>
  );
}

export default App;
