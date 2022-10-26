import { useState } from "react";
import Student from "./Student";
export default function ShowBtn({ record }) {
  
    const [showMore, setShowMore] = useState(false);
  return (
    <div className="ShowMoreBtn">
      <button onClick={() => setShowMore(!showMore)}>
        {" "}
        {!showMore ? "Show More..." : "Show Less..."}
      </button>
      {showMore ? (
        <div className="ShowMOre">
          <section className="Student-Information">
            <section className="Codewars">
              <article>
                <h3>Codewars</h3>
                <p>
                  {" "}
                  Current Total:
                  <span>{record.codewars.current.total}</span>
                </p>
                <p>
                  {" "}
                  Last Week:
                  <span> {record.codewars.current.lastWeek}</span>
                </p>
                <p>
                  {" "}
                  Goal:
                  <span> {record.codewars.goal.total}</span>
                </p>
                <p>
                  {" "}
                  Percent of Goal Achieved:
                  <span>
                    FIX THIS MATH
                    {/*{(record.codewars.current.total /
                    record.codewars.goals.total) *
                    100} */}
                  </span>
                </p>
              </article>{" "}
            </section>
            <section className="Scores">
              <article>
                <h3>Scores</h3>
                <p>
                  {" "}
                  Assignments:{" "}
                  <span>{record.cohort.scores.assignments * 100}%</span>
                </p>
                <p>
                  Projects: <span>{record.cohort.scores.projects * 100}%</span>
                </p>
                <p>
                  Assessments:{" "}
                  <span>{record.cohort.scores.assessments * 100}%</span>
                </p>
              </article>
            </section>

            <section className="certifications">
              <article>
                <h3>Certifications</h3>
                <p>
                  {" "}
                  Resume:{" "}
                  <span>{record.certifications.resume ? "✅" : "❌"}</span>
                </p>
                <p>
                  LinkedIn:{" "}
                  <span>{record.certifications.linkedin ? "✅" : "❌"}</span>
                </p>
                <p>
                  GitHub:{" "}
                  <span>{record.certifications.github ? "✅" : "❌"}</span>
                </p>
              </article>
            </section>
          </section>
        </div>
      ) : null}
    </div>
  );
}
