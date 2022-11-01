import { useState } from "react";
import Classes from "./components/Classes";
import Students from "./components/Students";

//import Student Data here from Data Json
import studentData from "./data/data.json";
import "./App.css";

function App() {
  const [students, setStudents] = useState([...studentData]);
  const [cohortName, setCohortName] = useState("All Students");

  return (
    <div>
      {/* <h1>Student Dashboard</h1> */}
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <Classes
          studentData={studentData}
          setStudents={setStudents}
          setCohortName={setCohortName}
        />
        <Students students={students} cohortName={cohortName} />
      </main>
    </div>
  );
}
export default App;