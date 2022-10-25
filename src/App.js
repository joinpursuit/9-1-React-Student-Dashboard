// import { useState } from 'react';
import Data from './data/data.json';
import Cohorts from './Cohorts';
import Students from './Students';
import './App.css';
function App() {
  // const [students, setStudents] = useState('');

  return (
    <div className="app">
      <div className="header">
        <header>
          <h1>Student Dashboard</h1>
        </header>
      </div>
      <div className="body">
        <div className="aside-div">
          <header style={{ color: 'blue', fontSize: '20px' }}>
            Choose a Class by Start Date
          </header>
          <Cohorts Data={Data} />
        </div>
        <div className="main-div">
          <main className="all-students">
            <section className="students-list">
              <h2> All Students</h2>
              <p>
                Total Students: <span>{Data.length}</span>
              </p>
            </section>
            <br></br>
            <div className="students-info">
              <Students Data={Data} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
