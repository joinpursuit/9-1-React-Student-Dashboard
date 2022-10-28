import React from "react";
import { useState } from "react";
import myjson from "./data/data.json";

export default function StudentCard({ filteredStudents }) {
  const [showMoreButton, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMoreButton);
  }
  console.log(showMoreButton);

  let cohortCards = filteredStudents.length ? filteredStudents : myjson;

  return (
    <div>
      {cohortCards.map((e) => (
        <section className="studentCard">
          <img
            src={`${e.profilePhoto}`}
            width="150"
            height="150"
            className="image"
          ></img>
          <div>
            <h2>
              {e.names.preferredName} {e.names.middleName.charAt(0)}.{" "}
              {e.names.surname}
            </h2>
            <p>{e.username}</p>
            <p>Birthday: {e.dob}</p>
            <p className="more" onClick={handleShowMore}>
              {showMoreButton ? "Show Less..." : "Show More..."}
            </p>
          </div>
          <div>{""}</div>
          {showMoreButton && (
            <article>
              <h3>Codewars:</h3>{" "}
              <p>Current Total: {e.codewars.current.total}</p>{" "}
              <p>Last Week: {e.codewars.current.lastWeek}</p>{" "}
              <p>Goal: {e.codewars.goal.total}</p>{" "}
              <p>
                Percent of Goal Achieved:{" "}
                {Math.floor(
                  (e.codewars.current.total / e.codewars.goal.total) * 100
                )}
                %
              </p>
            </article>
          )}
          {showMoreButton && (
            <article>
              <h3>Scores:</h3>{" "}
              <p> Assignments: {e.cohort.scores.assignments * 100} % </p>{" "}
              <p>Projects: {e.cohort.scores.projects * 100} % </p>{" "}
              <p>Assessments: {e.cohort.scores.assessments * 100} %</p>
            </article>
          )}
          {showMoreButton && (
            <article>
              <h3>Certifications:</h3>{" "}
              <p>Resume: {e.certifications.resume === false ? "❌" : "✅"} </p>{" "}
              <p>
                LinkedIn: {e.certifications.linkedin === false ? "❌" : "✅"}{" "}
              </p>{" "}
              <p>
                {" "}
                Mock Interview:{" "}
                {e.certifications.mockInterview === false ? "❌" : "✅"}
              </p>{" "}
              <p>GitHub: {e.certifications.github === false ? "❌" : "✅"}</p>
            </article>
          )}
        </section>
      ))}
    </div>
  );
}
