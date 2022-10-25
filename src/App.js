import students from './data/data.json'
import Classes from './Components/Classes'
import Students from './Components/Students';
import { useState } from 'react';
import './app.css'


function App() {
  const [ viewStudents, setViewStudent] = useState({students})


  return (
    <div>
    <header>
      <h1>Student Dashboard</h1>
    </header>
    <main>
      <aside>
        <Classes students={students}/>
      </aside>
      <section>
        <Students students={students}/>
      </section>
    </main>
    </div>
  );
}

export default App;
