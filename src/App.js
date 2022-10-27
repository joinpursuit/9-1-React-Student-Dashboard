import React from "react";
import { useState } from "react";
import data from "./data/data.json";
import Start from "./Start";
import Students from "./Students"


function App() {
  const [studentData, setStudentData] = useState(data)
  return (
    <div>
      <h1>Student Dashboard</h1>
      <br></br>
      <Start data={data} studentData={studentData} setStudentData={setStudentData}/>
      <br></br>
      <Students data={data} studentData={studentData} setStudentData={setStudentData} />

    </div>
)

}
export default App;
