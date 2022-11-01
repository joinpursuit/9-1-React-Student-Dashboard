import { useState } from "react";



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
    if (val > 100) {
      return "";
    } else if (val > 60) {
      return "blue";
    } else {
      return "Green";
    }
  };

  const formatDate = (dob) => {
    let bDate = dob.split("/");
    const month = new Date();
    month.setMonth(bDate[0] - 1);
    bDate[0] = month.toLocaleString([], { month: "long" });
    bDate[1] += ",";

    return bDate.join(" ");
  };

  return (
    <div className="Student">
      <img src={photo} height="100px"></img>
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
        <hr></hr>
        <button
        //show more section
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
        codewars.current.total < 600 ? (
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
                {/* //Goal Percent */}
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
                
              </p>
              <p>
               
                
              </p>
              <p>
                <span></span>
                
              </p>
              <p>
                <span> </span>
                
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
                {notes.map((e, i) => (
                  <li key={i}>{e.commenter + ' says, "' + e.comment + '"'}</li>
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