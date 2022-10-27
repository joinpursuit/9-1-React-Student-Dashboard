import { useState } from "react";
import Header from "./Components/Header";
import Students from "./Components/Students";
import Cohorts from "./Components/Cohorts";
import data from "./data/data";

function App() {
  //********* STATES *********/
  const [cohorts, setCohorts] = useState([]);

  let [cohortClicked, setCohortClicked] = useState("All Students");

  const [resetStudentDetails, setResetStudentDetails] = useState(null);

  //********* NON-STATE VARS *********/

  let cohortArr = [];
  const seasons = { Spring: 1, Summer: 2, Fall: 3, Winter: 4 };

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

    //Formats arrOfCohorts so that the state is set with a space between season and year
    arrOfCohorts.sort().map((cohort) => {
      setCohorts(arrOfCohorts);
    });
  };

  const splitString = (el) => {
    let sliceLetters = el.slice(0, -4);
    let sliceNums = el.slice(-4);
    return sliceLetters + " " + sliceNums;
  };

  // Filter for each cohort array based on click event on each cohort li in Cohorts
  let filteredCohortInfoData = data.filter((filteredCohort, i, data) => {
    if (cohortClicked === filteredCohort.cohort.cohortCode) {
      return filteredCohort;
    }
    if (cohortClicked === "All Students") {
      return data;
    }
  });

  // console.log(filteredCohortInfoData);

  //********** RETURN **********/

  return (
    <div className="page" onLoad={cohortListAside}>
      <Header />
      <Cohorts
        cohorts={cohorts}
        cohortListAside={cohortListAside}
        setCohortClicked={setCohortClicked}
        splitString={splitString}
        setResetStudentDetails={setResetStudentDetails}
      />
      <Students
        students={data}
        filteredCohortInfoData={filteredCohortInfoData}
        cohortClicked={cohortClicked}
        splitString={splitString}
        resetStudentDetails={resetStudentDetails}
      />
    </div>
  );
}

export default App;
