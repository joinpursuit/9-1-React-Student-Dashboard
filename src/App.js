import { useState } from "react";
import Classes from "./components/Classes";
import Students from "./components/Students";

import studentData from "./data/data.json";
import "./App.css";

function App() {
  const [students, setStudents] = useState([...studentData]);
  const [cohortName, setCohortName] = useState("All Students");
  const [search, setSearch] = useState("");

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
          setSearch={setSearch}
        />
        <Students
          students={students}
          cohortName={cohortName}
          setStudents={setStudents}
          studentData={studentData}
          search={search}
          setSearch={setSearch}
        />
      </main>
    </div>
  );
}

export default App;
