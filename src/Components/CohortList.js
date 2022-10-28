import "./CohortList.css";

export default function CohortList({ data, setSelected }) {
  let filtered = [
    ...new Set(
      data.map((item) => {
        return item.cohort.cohortCode;
      })
    ),
  ];

  const seasons = { Winter: 0, Spring: 1, Summer: 2, Fall: 3 };

  const splitArr = filtered.map((season) => season.split(/([0-9]+)/));

  const sorted = splitArr.sort(
    ([season, year], [season2, year2]) =>
      year - year2 || seasons[season] - seasons[season2]
  );

  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li key="all">
          <button
            className="cohortButton"
            onClick={() => setSelected("All Students")}
          >
            All Students
          </button>
        </li>
        {sorted.map(([season, year], i) => {
          let cohort = [season, year];

          function cohortClicked() {
            setSelected(cohort.join(" "));
          }

          return (
            <li key={i}>
              <button className="cohortButton" onClick={() => cohortClicked()}>
                {cohort.join(" ")}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
