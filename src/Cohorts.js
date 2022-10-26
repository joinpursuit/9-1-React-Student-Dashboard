import React from 'react';
import './Cohorts.css';

function Cohorts({ Data }) {
  // Data.map((comp) => {});
  // const filterData = Data.filter((el) => el === el.cohort.cohortCode);
  // console.log(filterData);
  return (
    <aside className="cohorts">
      <ul>
        <button id="all-students">All Students</button>
        <hr></hr>
        <button id="winter-2026">Winter 2026</button>
        <hr></hr>
        <button id="fall-2026">Fall 2026 </button>
        <hr></hr>
        <button id="summer-2026">Summer 2026 </button>
        <hr></hr>
        <button id="spring-2026">Spring 2026 </button>
        <hr></hr>
        <button id="winter-2025">Winter 2025 </button>
        <hr></hr>
        <button id="summer-2025">Summer 2025 </button>
        <hr></hr>
        <button id="spring-2025">Spring 2025 </button>
        <hr></hr>
        <button id="fall-2025">Fall 2025 </button>
        <hr></hr>
      </ul>
    </aside>
  );
}

export default Cohorts;
