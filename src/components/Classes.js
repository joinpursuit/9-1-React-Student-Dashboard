import { useState } from "react";

function Classes({ studentData, setStudents, setCohortName, setSearch }) {
  const [classList, setClassList] = useState(() => {
    const cohortData = studentData.map(({ cohort }) => cohort);
    // how to sort by date
    cohortData.sort(
      (a, b) => new Date(b.cohortStartDate) - new Date(a.cohortStartDate)
    );

    let cohorts = cohortData.map((e) => e.cohortCode.replace("20", " 20"));
    cohorts = [...new Set(cohorts)];
    return cohorts;
  });

  return (
    <div className="Classes">
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li>
          <h3
            onClick={(event) => {
              setStudents(studentData);
              setCohortName(event.target.textContent);
              setSearch("");
            }}
          >
            All Students
          </h3>
          <hr />
        </li>
        {classList.map((e) => {
          return (
            <li
              key={e.replace(" ", "")}
              onClick={(event) => {
                setStudents(
                  studentData.filter(
                    (e) =>
                      e.cohort.cohortCode ===
                      event.target.textContent.replace(" ", "")
                  )
                );
                setCohortName(event.target.textContent);
                setSearch("");
              }}
            >
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
