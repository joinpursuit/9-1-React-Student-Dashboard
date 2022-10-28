import React, { useState } from "react";
import "./Student.css";
import Studentdet from "./Studentdet";
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
      <div>
        <Studentdet student={student} />
      </div>
      <button className="showbtn" onClick={() => setShow(!show)}>
        {show ? "Show Less..." : "Show More..."}
      </button>
      {show && (
      <div>
        <div className="showmore">
          <aside>
            <h3>Codewars</h3>
            <p>Current Tototal: {student.codewars.current.total}</p>
            <p>Last Week:{student.codewars.current.lastweek} </p>
            <p>Goal: {student.codewars.goal.total}</p>
            <p>Percent of Goal Achieved: {goalPercent} %</p>
          </aside>
          <aside>
            <h3>Scores</h3>
            <p>Assignments: {student.cohort.scores.assignments * 100} %</p>
            <p>Projects: {student.cohort.scores.projects * 100} %</p>
            <p>Assessments: {student.cohort.scores.assessments * 100} %</p>
          </aside>
          <aside>
            <Certifications student={student} />
          </aside>
          </div>
          <div className="notes">
            <Notes student={student} notes={notes} setNotes={setNotes} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Student;
