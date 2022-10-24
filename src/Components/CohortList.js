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

  //   console.log(filtered);
  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li key="all">
          <button onClick={() => setSelected("All Students")}>
            All Students
          </button>
        </li>
        {filtered.map((cohort) => {
          function cohortClicked() {
            setSelected(cohortNameFormatted);
          }
          let cohortName = cohort.split("");
          let wordPortion = cohortName
            .slice(cohortName[cohortName.length], -4)
            .join("");
          //   console.log("text", wordPortion);
          let numPortion = cohortName.slice(-4).join("");
          //   console.log("num", numPortion);
          let cohortNameFormatted = wordPortion + " " + numPortion;

          return (
            <li key={cohort.id}>
              <button onClick={() => cohortClicked()}>
                {cohortNameFormatted}
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
