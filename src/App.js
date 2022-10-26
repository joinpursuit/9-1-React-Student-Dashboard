import { useState } from 'react';
import Data from './data/data.json';
import Cohorts from './Cohorts';
import Students from './Students';
import './App.css';
function App() {
  const [title, setTitle] = useState('All Students');
  const [total, setTotal] = useState(Data.length);
  const [student, setStudents] = useState(Data);

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
          <Cohorts
            total={total}
            setTotal={setTotal}
            title={title}
            setTitle={setTitle}
            Data={Data}
          />
        </div>
        <div className="main-div">
          <main className="all-students">
            <section className="students-list">
              <h2> {title}</h2>
              <p>
                Total Students: <span>{total}</span>
              </p>
            </section>
            <br></br>
            <div className="students-info">
              <Students Data={Data} student={student} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
