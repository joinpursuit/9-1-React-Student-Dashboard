import { useState } from "react";
import Classes from "./components/Classes";
import Students from "./components/Students";

import studentData from "./data/data.json";
import "./App.css";

function App() {
  const [students, setStudents] = useState([...studentData]);
  const [cohortName, setCohortName] = useState("All Students");

  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <Classes
          studentData={studentData}
          setStudents={setStudents}
          setCohortName={setCohortName}
        />
        <Students
          students={students}
          cohortName={cohortName}
          setStudents={setStudents}
          studentData={studentData}
        />
      </main>
    </div>
  );
}

export default App;
