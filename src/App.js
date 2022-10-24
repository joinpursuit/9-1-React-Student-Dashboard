import { useState } from "react";

import Header from "./Components/Header"
import CohortList from "./Components/CohortList"
import StudentList from "./Components/StudentList";
import data from "./data/data.json" 
import "./App.css"



function App() {


  const [studentTotal,setStudentTotal] = useState(250)
  const [currentCohort,setCurrentCohort] = useState("All Students")

  
  

  return (
    < div className="wrapper">
    <div className="header">
      <h1>
        <Header />
      </h1>
    </div>
    <div className="cohortList">
      <CohortList
      data={data}
      setCurrentCohort={setCurrentCohort} />
    </div>
    <div className="studentList">
      <StudentList 
      data={data} 
      studentTotal={studentTotal}
      currentCohort={currentCohort}
      setStudentTotal={setStudentTotal}
      />
    </div>
    </div>
  );
}

export default App;
