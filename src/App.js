import { useState } from "react";
import Header from "./Components/Header";
import Students from "./Components/Students";
import Cohorts from "./Components/Cohorts";
import data from "./data/data";

function App() {
  //********* STATES *********/
  const [cohorts, setCohorts] = useState([]);

  //********* NON-STATE VARS *********/

  let cohortArr = [];

  //********* HELPERS *********/

  //1. cohortListAside loops through data and sets the value of cohortArr to the be the value of the cohortCode for each element in the original array.
  //2. then creates a new set (cohortSet to remove the duplicates)
  //3. set is then converted back into array form (arrOfCohorts)
  //4. finally sets state of setCohorts to be the value of arrOfCohorts
  const cohortListAside = (e) => {
    // e.preventDefault();
    data.forEach((el) => {
      cohortArr = [...cohortArr, el.cohort.cohortCode];
    });
    const cohortSet = new Set(cohortArr);
    const arrOfCohorts = Array.from(cohortSet);
    setCohorts([arrOfCohorts]);

    console.log("###state###", cohorts);
  };

  //********** RETURN **********/

  return (
    <div className="page" onLoad={cohortListAside}>
      <Header />
      <Cohorts cohorts={cohorts} cohortListAside={cohortListAside} />
      <Students students={data} />
      <button onClick={cohortListAside}>click</button>
    </div>
  );
}

export default App;
