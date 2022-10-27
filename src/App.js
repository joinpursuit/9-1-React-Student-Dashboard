import { useState } from "react";
import Data from "./data/data.json";
import "./App.css";
import Cohort from "./Cohort";
import Students from "./Students";

function App() {
  const [cohort, setCohort] = useState("All Students");

  return (
    <div className="all">
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>
      <div className="body">
        <div className="cohort">
          <Cohort setCohort={setCohort} />
        </div>
        <div className="students">
          <Students cohort={cohort} Data={Data} />
        </div>
      </div>
    </div>
  );
}

export default App;
