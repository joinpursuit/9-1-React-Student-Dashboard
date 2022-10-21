import { useState } from "react";
import "./App.css";

import data from "./data/data.json";

function App() {
  const studentsData = [...data];
  const mappedStudentsToCohortCode = studentsData.map(
    (student) => student.cohort.cohortCode
  );
  const uniqueCohorts = [...new Set(mappedStudentsToCohortCode)];
  console.log(uniqueCohorts);

  const [cohort, setCohort] = useState(["All cohorts"]);

  return (
    <div className="app">
      <header>Student Dashboard</header>
      <main className="main">
        <aside className="cohortsList">
          <h2>Choose a Class by Start date</h2>
          <ul>
            <li>All coursed</li>
            {uniqueCohorts.map((cohort) => (
              <li>{cohort}</li>
            ))}
          </ul>
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
