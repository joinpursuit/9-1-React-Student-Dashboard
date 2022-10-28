import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Data from "./data/data.json";
import Aside from "./Components/Aside";
import Main from "./Components/Main";

import "./App.css";

function App({ el }) {
  const [cohort, setCohort] = useState("All Students");
  const [studentName, setStudentName] = useState("");
  const updateCohort = (e) => {
    setCohort(e.target.id);
  };

  const updateStudentName = (e) => {};
  return (
    <div className="app">
      <div className="header">
        <h1>
          Student Dashboard{" "}
          <span>
            <FaGraduationCap />
          </span>
        </h1>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.id)}
          placeholder="Enter Student Name"
        ></input>
        <FaSearch className="search" onClick={updateStudentName} />
      </div>
      <div className="side">
        <Aside Data={Data} updateCohort={updateCohort} />
      </div>
      <div className="main">
        <Main Data={Data} cohort={cohort} />
      </div>
    </div>
  );
}

export default App;
