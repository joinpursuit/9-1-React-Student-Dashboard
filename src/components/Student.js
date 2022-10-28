import { v1 as generateUniqueID } from "uuid";
import { useState } from "react";

import Check from "./Check";
import XIcon from "./XIcon";

function Student({
  photo,
  names,
  username,
  dob,
  certifications,
  codewars,
  cohort,
  notes,
}) {
  const [showMore, SetShowMore] = useState("Show More...");
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");

  const goalPercent = Math.round(
    (codewars.current.total / codewars.goal.total) * 100
  );

  const colorUpdate = (val) => {
    if (val > 99) {
      return "#006400";
    } else if (val > 49) {
      return "gold";
    } else {
      return "red";
    }
  };

  const formatDate = (dob) => {
    let newDate = dob.split("/");
    const month = new Date();
    month.setMonth(newDate[0] - 1);
    newDate[0] = month.toLocaleString([], { month: "long" });
    newDate[1] += ",";

    return newDate.join(" ");
  };

  return (
    <div className="Student">
      <img src={photo} height="120px"></img>
      <section>
        <h3>
          {names.preferredName} {names.preferredName.charAt(0) + "."}{" "}
          {names.surname}
        </h3>
        <p>{username}</p>
        <p>
          <span id="birthday">Birthday: </span>
          {formatDate(dob)}
        </p>
        <br></br>
        <button
          className="more"
          onClick={() =>
            showMore.includes("More")
              ? SetShowMore("Show Less...")
              : SetShowMore("Show More...")
          }
        >
          {showMore}
        </button>
      </section>
      <section className="on-track">
        {Object.values(certifications).includes(false) ||
        codewars.current.total < 601 ? (
          <></>
        ) : (
          <>On Track to Graduate</>
        )}
      </section>
      <section className="details">
        {showMore.includes("Less") ? (
          <>
            <div>
              <h4>Codewars:</h4>
              <p>
                <span>Current Total: </span>
                {codewars.current.total}
              </p>
              <p>
                <span>Last Week: </span>
                {codewars.current.lastWeek}
              </p>
              <p>
                <span>Goal: </span>
                {codewars.goal.total}
              </p>
              <p>
                <span>Percent of Goal Achieved: </span>
                <span style={{ color: colorUpdate(goalPercent) }}>
                  {goalPercent}%
                </span>
              </p>
            </div>
            <div>
              <h4>Scores:</h4>
              <p>
                <span>Assignments: </span>
                {cohort.scores.assignments * 100}%
              </p>
              <p>
                <span>Projects: </span>
                {cohort.scores.projects * 100}%
              </p>
              <p>
                <span>Assessments: </span>
                {cohort.scores.assessments * 100}%
              </p>
            </div>
            <div>
              <h4>Certifications:</h4>
              <p>
                <span>Resume: </span>
                {certifications.resume ? <Check /> : <XIcon />}
              </p>
              <p>
                <span>LinkedIn: </span>
                {certifications.linkedin ? <Check /> : <XIcon />}
              </p>
              <p>
                <span>Mock Interview: </span>
                {certifications.mockInterview ? <Check /> : <XIcon />}
              </p>
              <p>
                <span>GitHub: </span>
                {certifications.github ? <Check /> : <XIcon />}
              </p>
            </div>
            <hr />
            <section id="notes">
              <h4>1-on-1 Notes</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  notes.push({ commenter: commenter, comment: comment });
                  setCommenter("");
                  setComment("");
                  console.log(notes[0])
                }}
              >
                <label>
                  Commenter Name{" "}
                  <input
                    type="text"
                    name="commenter"
                    required={true}
                    value={commenter}
                    onChange={(e) => setCommenter(e.target.value)}
                  ></input>
                </label>
                <br />
                <label>
                  Comment{" "}
                  <input
                    type="text"
                    name="comment"
                    required={true}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></input>
                </label>
                <br />
                <input id="add-note" type="submit" value="Add Note" />
              </form>
              <ul>
                {notes.map((e) => (
                  <li key={generateUniqueID()}>
                    {e.commenter + ' says, "' + e.comment + '"'}
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}

export default Student;
