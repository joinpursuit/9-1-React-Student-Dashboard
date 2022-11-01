import "./Stats.css";

export default function Stats({ student }) {
  const { codewars, cohort, certifications } = student;
  const { current } = codewars;
  const { goal } = codewars;

  function formatCodeWarsPercentage() {
    const res = ((current.total / goal.total) * 100).toFixed(0);
    return res;
  }

  function colorCodeWarsPercent() {
    const res = ((current.total / goal.total) * 100).toFixed(0);
    if (res < 50) {
      return "red";
    } else if (res >= 50 && res < 100) {
      return "yellow";
    } else if (res >= 100) {
      return "green";
    }
  }

  return (
    <div className="statsContainer">
      <section className="stats">
        <h4>CodeWars</h4>
        <p>Current Total: {current.total}</p>
        <p>Last Week: {current.lastWeek}</p>
        <p>Goal: {goal.total}</p>
        <p>Percent of Goal Achieved:</p>
        <p>
          <span className={colorCodeWarsPercent()}>
            {formatCodeWarsPercentage()}%
          </span>
        </p>
      </section>
      <section className="stats">
        <br></br>
        <h4>Scores</h4>
        <p>Assignments: {cohort.scores.assignments * 100}%</p>
        <p>Projects: {cohort.scores.projects * 100}%</p>
        <p>Assessments: {cohort.scores.assessments * 100}%</p>
      </section>
      <section className="stats">
        <h4>Certifications</h4>
        <p>Resume: {certifications.resume ? "✅" : "❌"}</p>
        <p>LinkedIn: {certifications.linkedin ? "✅" : "❌"}</p>
        <p>Mock Interview: {certifications.mockInterview ? "✅" : "❌"}</p>
        <p>GitHub: {certifications.github ? "✅" : "❌"}</p>
      </section>
    </div>
  );
}
