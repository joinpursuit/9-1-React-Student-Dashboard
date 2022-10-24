// import { useState } from "react";
import Data from "./data/data.json";
import "./App.css";
import Cohort from "./Cohort";
import Students from "./Students";

function App() {
  return (
    <div className="all">
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>
      <div className="body">
        <div className="cohort">
          <Cohort />
        </div>
        <div className="students">
          <h2 className="studentText">All Students</h2>
          <h3 className="studentText">Total Students: {Data.length}</h3>
          <Students Data={Data} />
        </div>
      </div>
    </div>
  );
}

export default App;
