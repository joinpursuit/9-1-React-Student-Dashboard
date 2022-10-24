import "./Cohorts.css";

export default function Cohorts({ uniqueCohorts, chooseCohort }) {
  const seasons = {
    Winter2026: 1,
    Fall2026: 2,
    Summer2026: 3,
    Spring2026: 4,
    Winter2025: 5,
    Fall2025: 6,
    Summer2025: 7,
    Spring2025: 8,
  };

  const orderedCohorts = uniqueCohorts
    .map((cohort) => {
      return seasons[cohort];
    })
    .sort((a, b) => {
      return b - a;
    })
    .map((a) => {
      return Object.keys(seasons).find((key) => seasons[key] === a);
    })
    .reverse();

  function formatCohortName(cohort) {
    let idx = cohort.indexOf(20);
    return cohort.split(20).join(" 20");
  }

  return (
    <div className="cohorts">
      {"<Cohorts />"}
      <h2>Choose a Class by Start date</h2>
      <li onClick={() => chooseCohort("All Students")}>All Students</li>
      {orderedCohorts.map((cohort, idx) => (
        <li key={idx} onClick={() => chooseCohort(cohort)}>
          {formatCohortName(cohort)}
        </li>
      ))}
    </div>
  );
}
