import "./Cohorts.css";

export default function Cohorts({ uniqueCohorts, chooseCohort }) {
  return (
    <div className="cohorts">
      {"<Cohorts />"}
      <h2>Choose a Class by Start date</h2>

      <li onClick={() => chooseCohort("All Courses")}>All Courses</li>
      {uniqueCohorts.map((cohort, idx) => (
        <li key={idx} onClick={() => chooseCohort(cohort)}>
          {cohort}
        </li>
      ))}
    </div>
  );
}
