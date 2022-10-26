import { useState } from "react";
import Form from "./Form";
import "./studentList.css";
import Student from "./Student";
export default function ShowBtn({ record }) {
  const [showMore, setShowMore] = useState(false);

  function handleColor(record) {
    //   ((record.codewars.current.total / record.codewars.goal.total) * 100).toFixed(0) > 99 ? <span style={{color: "green"}}></span> : ((record.codewars.current.total / record.codewars.goal.total) * 100).toFixed(0) > 49 ? <span style={{color: "yellow"}}></span> : ((record.codewars.current.total / record.codewars.goal.total) * 100).toFixed(0) < 50 ? <span style={{color: "red"}}></span> : null
  }

  return (
    <div id="ShowMore">
      <p className="ShowMoreBtn" onClick={() => setShowMore(!showMore)}>
        {" "}
        {!showMore ? "Show More..." : "Show Less..."}
      </p>
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
                  Percent of Goal Achieved:{" "}
                  <span>
                    {(
                      (record.codewars.current.total /
                        record.codewars.goal.total) *
                      100
                    ).toFixed(0) > 99 ? (
                      <span style={{ color: "green" }}>
                        {" "}
                        {(
                          (record.codewars.current.total /
                            record.codewars.goal.total) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    ) : (
                        (record.codewars.current.total /
                          record.codewars.goal.total) *
                        100
                      ).toFixed(0) > 49 ? (
                      <span style={{ color: "yellow" }}>
                        {" "}
                        {(
                          (record.codewars.current.total /
                            record.codewars.goal.total) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    ) : (
                        (record.codewars.current.total /
                          record.codewars.goal.total) *
                        100
                      ).toFixed(0) < 50 ? (
                      <span style={{ color: "red" }}>
                        {" "}
                        {(
                          (record.codewars.current.total /
                            record.codewars.goal.total) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    ) : null}
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
            {/* //! */}
            <Form record={record} />
          </section>
        </div>
      ) : null}
    </div>
  );
}
