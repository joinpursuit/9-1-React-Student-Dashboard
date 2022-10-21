import { useState } from "react";

function Classes({ studentData }) {
  const [classList, setClassList] = useState(() => {
    let cohorts = studentData.map(({ cohort }) =>
      cohort.cohortCode.split("20").join(" 20")
    );
    cohorts = [...new Set(cohorts)];
    return cohorts.sort();
  });
  return (
    <div className="Classes">
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li>
          <h3>All Students</h3>
          <hr />
        </li>

        {classList.map((e) => {
          return (
            <li key={e.split(" ").join("")}>
              <h3>{e}</h3>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Classes;
