import React, { useState } from "react";
import "./Student.css";
// import Studentdet from "./Studentdet";
import Certifications from "./Certifications";
import Notes from "./Notes";

function Student({ student, notes, setNotes }) {
  
  const [show, setShow] = useState(false);
  let goalPercent = (
    (student.codewars.current.total / student.codewars.goal.total) *
    100
  ).toFixed(0);
  return (
    <div>
      {/* <div>
        <Studentdet student={student} />
      </div> */}
      <button className="showbtn" onClick={() => setShow(!show)}>
        {show ? "Show Less..." : "Show More..."}
      </button>
      {show && (
        <div>
      <section>
        <div className="showmore">
          <article>
            <h3>Codewars</h3>
            <p><b>Current Total: </b>{student.codewars.current.total}</p>
            <p><b>Last Week: </b>{student.codewars.current.lastWeek} </p>
            <p><b>Goal: </b>{student.codewars.goal.total}</p>
            <p><b>Percent of Goal Achieved: </b>{goalPercent} %</p>
          </article>
          <article>
            <h3>Scores</h3>
            <p><b>Assignments: </b>{student.cohort.scores.assignments * 100} %</p>
            <p><b>Projects: </b>{student.cohort.scores.projects * 100} %</p>
            <p><b>Assessments: </b>{student.cohort.scores.assessments * 100} %</p>
          </article>
          <article>
            <Certifications student={student} />
          </article>
          </div>
          <div className="notes">
            <Notes student={student} notes={notes} setNotes={setNotes} />
          </div>
        </section>
        </div>
      )}
    </div>
  );
}

export default Student;
