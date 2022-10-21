export default function Cohort({
  Records,
  cohortOption,
  setCohortOption,
  handleCohortDate,
}) {
  return (
    <div className="CohortList">
      <h2>Choose a Class by Start Date.</h2>
      {
        <ul style={{ textDecoration: "underline", border: "1px dashed red" }}>
          <p>All Students</p>
          <p>Winter 2026</p>
          <p>Fall 2026</p>
          <p>Summer 2026</p>
          <p>Spring 2026</p>
          <p>Winter 2025</p>
          <p>Fall 2025</p>
          <p>Summer 2025</p>
          <p>Spring 2025</p>
        </ul>
      }
      {Records.map((record) => {
        return (
          <div className="Cohort" key={record.id}>
            <ul>{record.cohort.cohortCode}</ul>
          </div>
        );
      })}
    </div>
  );
}
