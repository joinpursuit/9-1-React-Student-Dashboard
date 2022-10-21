import { useState } from "react";
import Classes from "./components/Classes";
import Students from "./components/Students";

import studentData from "./data/data.json";
import "./App.css";

function App() {
  const [students, setStudents] = useState([...studentData]);
  
  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <Classes studentData={studentData}/>
        <Students students={students} setStudents={setStudents} />
      </main>
    </div>
  );
}

export default App;
