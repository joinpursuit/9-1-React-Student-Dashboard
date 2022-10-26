import React, { useState } from 'react';
import './Cohorts.css';

function Cohorts({ Data, title, setTitle, total, setTotal }) {
  const [showCohort, setShowCohort] = useState(Data);
  // console.log(showCohort);

  const filterByClass = Data.filter((e) => {
    if (e.cohort.cohortCode === 'Winter2026') {
      console.log('hello');

      // return setTotal(filterByClass);
      // setTitle('Winter 2026');
    } else if (e.cohort.cohortCode === 'Fall2026 ') {
    } else if (e.cohort.cohortCode === 'Summer2026') {
    } else if (e.cohort.cohortCode === 'Winter2026') {
    } else if (e.cohort.cohortCode === 'Summer2025') {
    } else if (e.cohort.cohortCode === 'Spring2025') {
    } else if (e.cohort.cohortCode === 'Winter2025') {
    } else if (e.cohort.cohortCode === 'Fall2025') {
    }
  });

  console.log(filterByClass);

  function handleClick() {
    setTitle('All Students');
    setShowCohort(Data);
    setTotal(Data.length);
  }
  return (
    <aside className="cohorts">
      <ul>
        <button onClick={handleClick} id="all-students">
          All Students
        </button>
        <hr></hr>
        <button onClick={() => setShowCohort(filterByClass)} id="winter-2026">
          Winter 2026
        </button>
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
