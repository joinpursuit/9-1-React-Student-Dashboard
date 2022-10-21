export default function Cohorts({ uniqueCohorts }) {
  return (
    <ul>
      <li>All Courses</li>
      {uniqueCohorts.map((cohort, idx) => (
        <li key={idx}>{cohort}</li>
      ))}
    </ul>
  );
}
