export default function Cohorts({ uniqueCohorts, chooseCohort }) {
  return (
    <ul>
      <li onClick={() => chooseCohort("All Courses")}>All Courses</li>
      {uniqueCohorts.map((cohort, idx) => (
        <li key={idx} onClick={() => chooseCohort(cohort)}>
          {cohort}
        </li>
      ))}
    </ul>
  );
}
