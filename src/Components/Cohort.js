import React from "react";
import "./Cohort.css";

const Cohort = ({ cohortNames, selectCohort, formatCode }) => {
  return (
    <div className="cohort">
      <h2> Choose a class by Start Date</h2>
      <ul className="year">
        <li>
          <button onClick={() => selectCohort("")}>All Students</button>
        </li>
        {cohortNames.map((cohort) => {
          return (
            <li key={cohort}>
              <button onClick={() => selectCohort(cohort)}>{formatCode(cohort)}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cohort;
