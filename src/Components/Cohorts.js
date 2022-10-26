import { useState } from "react";

const Cohorts = ({
  cohorts,
  cohortListAside,
  setCohortClicked,
  setShowStudentDetailsBool,
  splitString,
  setResetStudentDetails,
}) => {
  let searchCohort = (e) => {
    setCohortClicked(e.target.id);
    setResetStudentDetails(false);
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
              {splitString(cohort)}
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cohorts;
