import studentData from "./data/data.json"
import Students from "./components/Students";
import "./index.css"
import Cohorts from "./components/Cohorts";


function App() {

  let years = []
  let codes = []
  for (const student of studentData) {
    let cohortCode = student.cohort.cohortCode
    codes.push(cohortCode)
    cohortCode = cohortCode.substring(0, cohortCode.length - 4) + " " + cohortCode.slice(cohortCode.length - 4)
    years.push(cohortCode)
  }
  let filteredYears = years.filter((item, i, ar) => ar.indexOf(item) === i);
  let filteredCodes = codes.filter((item, i, ar) => ar.indexOf(item) === i);

  function sortYears (years) {
    return years.sort((a,b) => {
      return (
        b.substring(b.length - 4, b.length) - a.substring(a.length - 4, a.length) 
      )
    })
  }
  function sortCodes (codes) {
    return codes.sort((a,b) => {
      return (
        b.substring(b.length - 4, b.length) - a.substring(a.length - 4, a.length) 
      )
    })
  }
 sortYears(filteredYears)


  return (
    <div>
      <h1>Student Dashboard</h1>
      <Cohorts filteredYears={filteredYears} studentData={studentData}/>
      <Students studentData={studentData}/>
    </div>
  );
}

export default App;
