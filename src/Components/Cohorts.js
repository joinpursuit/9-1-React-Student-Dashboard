import { useState } from "react";

const Cohorts = ({
  cohorts,
  cohortListAside,
  setCohortClicked,
  setShowStudentDetailsBool,
}) => {
  // console.log(cohorts);

  let searchCohort = (e) => {
    setCohortClicked(e.target.id);
    setShowStudentDetailsBool(false);
    console.log(e.target.id);
  };

  return (
    <div className="aside" onLoad={cohortListAside}>
      <ul>
        <li id={"All Students"} onClick={searchCohort}>
          All Students
        </li>
        <hr></hr>
        {cohorts.map((cohort) => {
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
