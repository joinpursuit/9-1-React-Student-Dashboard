import Header from "./components/Header";
import Cohort from './components/Cohort'
import Students from './components/Students'
import "./App.css"
import { useState } from "react";
import data from './data/data.json'

function App() {
  const [student, setStudent] = useState(data)
  const [cohorts, setCohorts] = useState('All Students')

  
  return (
    <div className="wrap">
     <Header/>
     <Cohort/>
     <Students/>
    </div>
  );
}

export default App;
