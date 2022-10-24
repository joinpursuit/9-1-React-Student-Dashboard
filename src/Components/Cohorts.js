import { useState } from "react";
const Cohorts = ({ cohorts, cohortListAside }) => {
  console.log(cohorts);
  //   cohortListAside();

  const cohortLi = () => {
    cohorts.map((cohort) => {
      return <li>{cohort}</li>;
    });
  };

  return (
    <div className="aside" onLoad={cohortListAside}>
      <ul>{cohorts}</ul>
    </div>
  );
};

export default Cohorts;
