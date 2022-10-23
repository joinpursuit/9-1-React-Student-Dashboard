export default function Cohort({
  Records,
  cohortOption,
  setCohortOption,
  handleCohortDate,
}) {
  return (
    <div className="CohortList">
      <h2>Choose a Class by Start Date</h2>
      {
        <ul style={{ textDecoration: "underline", border: "1px dashed red" }}>
          <li>
            <button>All Students</button>
          </li>

          <li>
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
            <button>Winter 2025</button>{" "}
          </li>
          <li>
            <button>Fall 2025</button>
          </li>
          <li>
            <button>Summer 2025</button>
          </li>
          <li>
            <button>Spring 2025</button>
          </li>
        </ul>
      }
      {/* {Records.map((record) => {
        return (
          <div className="Cohort" key={record.id}>
            <ul>{record.cohort.cohortCode}</ul>
          </div>
        );
      })} */}
    </div>
  );
}
