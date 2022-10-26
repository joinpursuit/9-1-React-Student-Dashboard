import "./Cohorts.css";

export default function Cohorts({
  formatCohortName,
  uniqueCohorts,
  chooseCohort,
}) {
  const seasons = {
    Winter: 0,
    Fall: 1,
    Summer: 2,
    Spring: 3,
  };

  // Sorting Algorithm for Cohorts list
  const orderedCohorts = uniqueCohorts
    .map((season) => season.split(/([0-9]+)/))
    .map((arr) => {
      arr.pop();
      return arr;
    })
    .sort(([aSeason, aYear], [bSeason, bYear]) => {
      return bYear - aYear || seasons[aSeason] - seasons[bSeason];
    })
    .map(([season, year]) => {
      return `${season}${year}`;
    });

  return (
    <div className="cohorts">
      {"<Cohorts />"}
      <h2>Choose a Class by Start Date</h2>
      <li onClick={() => chooseCohort("All Students")}>All Students</li>
      {orderedCohorts.map((cohort, idx) => (
        <li key={idx} onClick={() => chooseCohort(cohort)}>
          {formatCohortName(cohort)}
        </li>
      ))}
    </div>
  );
}
