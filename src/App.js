import React, { useState } from "react";
import data from "./data/data.json";
import Cohorts from "./Components/Cohorts";
import StudentList from "./Components/StudentList";
import './App.css';





function App() {
  const [title, setTitle] = useState('All Students');
  const [studentData, setStudentData] = useState(data)
  const [studentTotal, setStudentTotal] = useState(data.length);
 

  return (
    <div className="body">
      <aside className="cohorts">
      <header><b>Choose Class By Start Date</b></header>

      <Cohorts setStudentData={setStudentData}
      studentData={studentData}
      data={data}
      total={studentTotal}
      setTotal={setStudentTotal}
      title={title}
      setTitle={setTitle}
      
      />

      </aside>
      <div>
        <div className="body">
        <main>
          <h3>{title}</h3>
          <p> Total Students: {studentTotal}  </p>

        </main>
      </div>

      <StudentList data={data} 
      studentTotal={studentTotal}
      studentData={studentData} 
      title={title} />
      </div>
    </div>
  );
}

export default App;
