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
      <h4 id="cohortH2">Classes by Start-Date</h4>
      <ul>
        <li id={"All Students"} onClick={searchCohort}>
          All Students
        </li>
        <hr></hr>
        {cohorts.map((cohort, i) => {
          return (
            <li className="cohorts" id={cohort} onClick={searchCohort}>
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
