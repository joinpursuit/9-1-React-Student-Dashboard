// Styling
import "./Cohorts.css";

export default function Cohorts({
  formatCohortName,
  uniqueCohorts,
  chooseCohort,
}) {
  // Helper Object for Sorting Algorithm
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
  // Reference: https://stackoverflow.com/questions/72341613/javascript-how-to-sort-an-array-of-strings-that-has-seasons-and-years

  return (
    <div className="cohorts">
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
