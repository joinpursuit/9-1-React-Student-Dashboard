import { useState } from "react";
import React from "react";
import Data from "./data/data.json"
import Students from "./AllStudents"
import Class from "./Class"

// import state & react 
// give props to componets 
function App() {
  const [classSeason, setClassSeason] =useState(Data)
  let cohort = [...new Set(Data.map((date)=>date.cohort.cohortCode))]
  console.log(cohort)
  return (
    <div className="entireApp">
      <header> <h1>Student Dashboard</h1></header>
      <Class Data={Data} classSeason={classSeason} setClassSeason={setClassSeason} />
      <Students Data={Data}classSeason={classSeason} setClassSeason={setClassSeason}/>
    </div>
  );
}

export default App;





// need all students header to be dynamic based on which cohort is selected

// need to put A count of how many students there are. in allstudents file  

// do the percentage thing 
// create a section for the form 