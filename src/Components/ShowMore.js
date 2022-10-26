import { useState } from "react";
import "./ShowMore.css";

export default function ShowMore({ person }) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  let percent = (
    (person.codewars.current.total / person.codewars.goal.total) *
    100
  ).toFixed(0);

  function changeColor(percent) {
    if (percent >= 100) {
      return <span style={{ color: "green" }}>{percent}</span>;
    } else if (100 > percent > 49) {
      return <span style={{ color: "yellow" }}>{percent}</span>;
    } else if (percent < 50) {
      return <span style={{ color: "red" }}>{percent}</span>;
    }
  }

  return (
    <>
      <button
        className="detailsButton"
        onClick={() => {
          toggleDetails();
          changeColor(percent);
        }}
      >
        {!showDetails ? "Show more..." : "Show less..."}
      </button>
      {showDetails ? (
        <section className="details">
          <article>
            <h4>Codewars:</h4>
            <p>
              <span>Current Total: </span>
              {person.codewars.current.total}
            </p>
            <p>
              <span>Last Week: </span>
              {person.codewars.current.lastWeek}
            </p>
            <p>
              <span>Goal: </span> {person.codewars.goal.total}
            </p>
            <p>
              <span>Percentage of Goal Achieved: </span>
              {/* <span>{percent}%</span> */}
              {changeColor(percent)}
            </p>
          </article>
          <article>
            <h4>Scores</h4>
            <p>
              <span>Assignments: </span>
              {person.cohort.scores.assignments * 100}%
            </p>
            <p>
              <span>Projects: </span> {person.cohort.scores.projects * 100}%
            </p>
            <p>
              <span>Assessments: </span>{" "}
              {person.cohort.scores.assessments * 100}%
            </p>
          </article>
          <article>
            <h4>Certifications</h4>
            <p>
              <span>Resume: </span> {person.certifications.resume ? "✅" : "❌"}
            </p>
            <p>
              <span>LinkedIn: </span>{" "}
              {person.certifications.linkedin ? "✅" : "❌"}
            </p>
            <p>
              <span>Mock Interview: </span>{" "}
              {person.certifications.mockInterview ? "✅" : "❌"}
            </p>
            <p>
              <span>GitHub: </span> {person.certifications.github ? "✅" : "❌"}
            </p>
          </article>
        </section>
      ) : null}
    </>
  );
}
