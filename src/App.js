import { useState } from "react";
import Header from "./Components/Header";
import Students from "./Components/Students";
import Cohorts from "./Components/Cohorts";
import data from "./data/data";

function App() {
  //********* STATES *********/
  const [cohorts, setCohorts] = useState([]);

  // const [studentInfo, setStudentInfo] = useState({
  //   all: [...data],
  //   byCohortCode: {},
  //   selected: [],
  // });

  let [cohortClicked, setCohortClicked] = useState("All Students");

  // console.log("STUDENT INFO", studentInfo);

  //********* NON-STATE VARS *********/

  let cohortArr = [];
  let cohortsFormatted = [];

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
    arrOfCohorts.forEach((cohort) => {
      if (cohort.length === 10) {
        cohort.slice(5);
        cohortsFormatted = [cohort];
      }
      if (cohort.length === 8) {
        cohort.slice(3);
        cohortsFormatted = [cohort];
      }
    });
    setCohorts(arrOfCohorts);
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
      />
      <Students
        students={data}
        filteredCohortInfoData={filteredCohortInfoData}
        cohortClicked={cohortClicked}
      />
    </div>
  );
}

export default App;
