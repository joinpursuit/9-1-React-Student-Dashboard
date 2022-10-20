import Header from "./components/Header";
import Cohort from './components/Cohort'
import StudentCard from './components/StudentCard'
import "./App.css"
import { useState } from "react";
import data from './data/data.json'

function App() {
  const [student, setStudent] = useState(data)
  const [cohorts, setCohorts] = useState('All Students')

  return (
    <div className="wrap">
     <Header/>
     <Cohort
    //  data={data}
     student={student}
     setStudent={setStudent}
     cohorts={cohorts}
     setCohorts={setCohorts}
     />
     <StudentCard
     data={data}
     student={student}
     setStudent={setStudent}
     cohorts={cohorts}
     />
    </div>
  );
}

export default App;
