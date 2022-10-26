import { useState } from "react";

const Cohorts = ({
  cohorts,
  cohortListAside,
  setCohortClicked,
  setShowStudentDetailsBool,
}) => {
  // console.log(cohorts);

  const formattedCohorts = cohorts.map((el) => {
    let sliceLetters = el.slice(0, -4);
    let sliceNums = el.slice(-4);
    return sliceLetters + " " + sliceNums;
  });

  const [formattedCohortsInvoked, setFormattedCohortsInvoked] =
    useState(formattedCohorts);

  console.log(formattedCohorts);

  // let cohortId = cohorts.map((cohort) => {
  //   setCohortInfo.cohortID(cohort.id);
  //   console.log(cohortInfo);
  // });

  let searchCohort = (e) => {
    setCohortClicked(e.target.id);
    console.log(e.target.id);
  };

  return (
    <div className="aside" onLoad={cohortListAside}>
      <ul>
        <li id={"All Students"} onClick={searchCohort}>
          All Students
        </li>
        <hr></hr>
        {cohorts.map((cohort, i) => {
          return (
            <li id={cohort} onClick={searchCohort}>
              {cohort}
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cohorts;
