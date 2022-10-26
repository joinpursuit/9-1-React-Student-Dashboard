import { useState } from "react";
import "./ShowMore.css";
import CommentForm from "./CommentForm";

export default function ShowMore({ person }) {
  const [showDetails, setShowDetails] = useState(false);
  const [notes, setNotes] = useState(person.notes);

  function handleNotes(newNote) {
    setNotes([...notes, newNote]);
  }

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
    <div>
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
              <span>
                <em>Current Total: </em>
              </span>
              {person.codewars.current.total}
            </p>
            <p>
              <span>
                <em>Last Week: </em>
              </span>
              {person.codewars.current.lastWeek}
            </p>
            <p>
              <span>
                <em>Goal: </em>
              </span>{" "}
              {person.codewars.goal.total}
            </p>
            <p>
              <span>
                <em>Percentage of Goal Achieved: </em>
              </span>

              {changeColor(percent)}
            </p>
          </article>
          <article>
            <h4>Scores</h4>
            <p>
              <span>
                <em>Assignments: </em>
              </span>
              {person.cohort.scores.assignments * 100}%
            </p>
            <p>
              <span>
                <em>Projects: </em>
              </span>{" "}
              {person.cohort.scores.projects * 100}%
            </p>
            <p>
              <span>
                <em>Assessments: </em>
              </span>{" "}
              {person.cohort.scores.assessments * 100}%
            </p>
          </article>
          <article>
            <h4>Certifications</h4>
            <p>
              <span>
                <em>Resume: </em>
              </span>{" "}
              {person.certifications.resume ? "✅" : "❌"}
            </p>
            <p>
              <span>
                <em>LinkedIn: </em>
              </span>{" "}
              {person.certifications.linkedin ? "✅" : "❌"}
            </p>
            <p>
              <span>
                <em>Mock Interview: </em>
              </span>{" "}
              {person.certifications.mockInterview ? "✅" : "❌"}
            </p>
            <p>
              <span>
                <em>GitHub: </em>
              </span>{" "}
              {person.certifications.github ? "✅" : "❌"}
            </p>
          </article>
          <hr />
          <CommentForm
            handleNotes={handleNotes}
            notes={notes}
            setNotes={setNotes}
            person={person}
          />
        </section>
      ) : null}
    </div>
  );
}
