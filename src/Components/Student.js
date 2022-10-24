import { useState } from "react";
import StudentInfo from "./StudentInfo";

export default function Student({ student }) {
  const [showMore, setShowMore] = useState(false);

  const { codewars } = student;
  const { current } = codewars;
  const { goal } = codewars;

  function formatCodeWarsPercentage(current, goal) {
    let res = (current.total / goal.total) * 100;
    console.log(goal);
    return res.toFixed(0);
  }

  return (
    <li className="student">
      <StudentInfo student={student} />
      <p className="showMoreButton" onClick={() => setShowMore(!showMore)}>
        Show more...
      </p>
      {showMore && (
        <>
          <hr></hr>
          <section className="showMoreSection">
            <div>
              <section>
                <h4>CodeWars</h4>
                <p>Current Total: {current.total}</p>
                <p>Last Week: {student.codewars.current.lastWeek}</p>
                <p>Goal: {goal.total}</p>
                <p>
                  Percent of Goal Achieved:{" "}
                  {formatCodeWarsPercentage(current, goal)}%
                </p>
              </section>
            </div>
            <hr></hr>
            <form className="form"></form>
            <div className="commenets">Comments</div>
          </section>
        </>
      )}
    </li>
  );
}
