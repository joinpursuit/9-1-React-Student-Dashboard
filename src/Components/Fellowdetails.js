import React from "react";
import FellowDetails from "./FellowDetails.css"

const Fellowdetails = ({ fellow }) => {
  const codewarsPercent =
    (fellow.codewars.current.total / fellow.codewars.goal.total).toFixed(2) *
    100;

  return (
    <div>
      <section className="fellow-details">
        <article>
          <h3>Codewars:</h3>
          <p>
            <span>Current Total: </span>
            {fellow.codewars.current.total}
          </p>
          <p>
            <span>Last Week: </span>
            {fellow.codewars.current.lastWeek}
          </p>
          <p>
            <span>Goal: </span>
            {fellow.codewars.goal.total}
          </p>
          <p>
            <span>Percent of Goal Achieved:</span> {codewarsPercent}%
          </p>
        </article>
        <article>
          <h3>Scores</h3>
          <p>
            <span>Assignments: </span>
            {fellow.cohort.scores.assignments * 100} %
          </p>
          <p>
            <span>Projects: </span>
            {fellow.cohort.scores.projects * 100} %
          </p>
          <p>
            <span>Assessments: </span>
            {fellow.cohort.scores.assessments * 100} %
          </p>
        </article>
        <article>
          <h3>Certifications</h3>
          <p>
            <span>Resume: </span>{" "}
            {fellow.certifications.resume ? <span>✅</span> : <span>❌</span>}
          </p>
          <p>
            <span>LinkedIn: </span>{" "}
            {fellow.certifications.linkedin ? <span>✅</span> : <span>❌</span>}
          </p>
          <p>
            <span>Mock Interview: </span>{" "}
            {fellow.certifications.mockinterview ? (
              <span>✅</span>
            ) : (
              <span>❌</span>
            )}{" "}
          </p>
          <p>
            <span>GitHub: </span>
            {fellow.certifications.guthub ? (
              <span>✅</span>
            ) : (
              <span>❌</span>
            )}{" "}
          </p>
        </article>
      </section>
    </div>
  );
};

export default Fellowdetails;
