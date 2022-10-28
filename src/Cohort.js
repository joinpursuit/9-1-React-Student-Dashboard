import React from "react";
import StudentCards from "./StudentCards";
// import {handleTotalStudents} from "./StudentCards"

export default function Cohort({ myjson, updatedCohort }) {
  let cohortSzn = myjson.map((E) => E.cohort.cohortCode);

  console.log(cohortSzn);

  const unique = Array.from(new Set(cohortSzn));

  console.log(unique);

  return (
    <aside>
      <h2 className="Start-date">Choose a Class by Start Date</h2>
      <ul>
        <li onClick={updatedCohort} className="allStudents">
          All Students
        </li>
        {unique.map((e) => (
          <li onClick={updatedCohort} className="cohortSzn">
            {e}
          </li>
        ))}
      </ul>
    </aside>
  );
}

{
  /* {myjson.map((E) => {
  <li>{E.username}</li>;
})} */
}
