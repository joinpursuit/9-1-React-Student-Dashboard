import Header from "./components/Header";
import Cohort from './components/Cohort'
import Students from './components/Students'
import "./App.css"
import { useState } from "react";
import data from './data/data.json'

function App() {
  const [student, setStudent] = useState(data)
  const [cohorts, setCohorts] = useState('All Students')
  const [notes, setNotes] = useState(data.notes)
  //This is maybe working

  return (
    <div className="wrap">
     <Header/>
     <Cohort
     student={student}
     setStudent={setStudent}
     cohorts={cohorts}
     setCohorts={setCohorts}
     />
     <Students
     data={data}
     student={student}
     setStudent={setStudent}
     cohorts={cohorts}
     notes={notes}
     setNotes={setNotes}
     />
    </div>
  );
}

export default App;
