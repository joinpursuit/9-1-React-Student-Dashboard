import "./CohortList.css";

export default function CohortList({ data, setSelected }) {
  // const []

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

  //    const final= sorted.map(([season, year]) => `${season}${year}`)

  console.log(sorted);

  //   console.log(filtered);
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
        {sorted.map(([season, year]) => {
          let cohort = [season, year];
          console.log(cohort);
          function cohortClicked() {
            setSelected(cohort.join(" "));
          }
          //   let cohortName = cohort.split("");
          //   let wordPortion = cohortName
          //     .slice(cohortName[cohortName.length], -4)
          //     .join("");
          //   //   console.log("text", wordPortion);
          //   let numPortion = cohortName.slice(-4).join("");
          //   //   console.log("num", numPortion);
          //   let cohortNameFormatted = wordPortion + " " + numPortion;

          return (
            <li key={cohort.id}>
              <button className="cohortButton" onClick={() => cohortClicked()}>
                {cohort.join(" ")}
              </button>
            </li>
          );
        })}
        {/* <li>
          <button>Winter 2026</button>
        </li>
        <li>
          <button>Fall 2026</button>
        </li>
        <li>
          <button>Summer 2026</button>
        </li>
        <li>
          <button>Spring 2026</button>
        </li>
        <li>
          <button>Winter 2025</button>
        </li>
        <li>
          <button>Fall 2025</button>
        </li>
        <li>
          <button>Summer 2025</button>
        </li>
        <li>
          <button>Spring 2025</button>
        </li> */}
      </ul>
    </div>
  );
}
