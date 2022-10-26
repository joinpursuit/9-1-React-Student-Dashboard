import { useState } from "react";

const Cohorts = ({ cohorts, cohortListAside, setCohortClicked }) => {
  // console.log(cohorts);

  let searchCohort = (e) => {
    setCohortClicked(e.target.innerText);
  };

  return (
    <div className="aside" onLoad={cohortListAside}>
      <ul>
        <li onClick={searchCohort}>All Students</li>
        <hr></hr>
        {cohorts.map((cohort) => {
          return (
            <li onClick={searchCohort}>
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
