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

  const orderedCohorts = uniqueCohorts
    .map((season) => season.split(/([0-9]+)/))
    // Splits cohortCodes into two nested arrays. One array with the season and another with the year, allowing for easier access to each element

    // ["winter2025", "summer2026", ...rest]
    // -> [["winter", "2025", " "], ["summer", "2026", " "], ...rest]

    .sort(([aSeason, aYear], [bSeason, bYear]) => {
      return bYear - aYear || seasons[aSeason] - seasons[bSeason];
    }) // Sorts the cohort codes depending first on the year and then on the season, using the Helper season object as a reference to determine the order of the seasons

    // "or" operator allows us to compare years first and the seasons since it short-ciruits if the difference between the years is not zero, otherwise the seasons are compares by using the helper Object as reference

    .map(([season, year]) => {
      return `${season}${year}`;
    }); // returns original structure for cohortCodes but in chronoloical order

  // Reference: https://stackoverflow.com/questions/72341613/javascript-how-to-sort-an-array-of-strings-that-has-seasons-and-years

  return (
    <div className="cohorts">
      <h2 id="cohortsTitle">Choose a Class by Start Date</h2>
      <li className="cohort" onClick={() => chooseCohort(null)}>
        All Students
      </li>
      {orderedCohorts.map((cohort, idx) => (
        <li className="cohort" key={idx} onClick={() => chooseCohort(cohort)}>
          {formatCohortName(cohort)}
        </li>
      ))}
    </div>
  );
}
