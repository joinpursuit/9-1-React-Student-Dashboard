import React from "react";
import { useState } from "react";
import StudentCards from "./StudentCards";
import Cohort from "./Cohort";

import "./App.css";
import myjson from "./data/data.json";

// let email = myjson.forEach((E) => {
//   console.log(E.username);
// });
// let Ids = myjson.forEach((E) => {
//   console.log(E.id);
// });

console.log(myjson.length, "entire json");
// console.log(email, "user emails");
// console.log(Ids, "ids");

function App() {
  const [cohort, setCohort] = useState("All Students");

  const updatedCohort = (e) => {
    setCohort(e.target.innerText);
  };

  return (
    <div>
      <h1 className="Dashboard-Header">Student Dashboard</h1>
      <body className="Body">
        <Cohort myjson={myjson} updatedCohort={updatedCohort} />
        <StudentCards cohort={cohort} updatedCohort={updatedCohort} />
      </body>
    </div>
  );
}

export default App;
