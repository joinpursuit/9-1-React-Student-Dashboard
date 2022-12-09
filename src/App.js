import { useState } from 'react'

import Header from './Components/Header'
import Cohort from './Components/Cohort'
import Students from './Components/Students'

import data from './data/data.json'
import './App.css'

function App() {
  const [cohort, setCohort] = useState('All Students')
  const [students, setStudents] = useState(data)
  
  return (
    <div>
        <Header />
        <Cohort 
          students={students}
          setStudents={setStudents}
          cohort={cohort}
          setCohort={setCohort}
        />
          <Students 
            data={data}
            students={students}
            setStudents={setStudents}
            cohort={cohort}
            setCohort={setCohort}
          />
      </div>
  );
}

export default App;
