import { useState } from "react";
// import Student from "./Student";

const StudentDetails = ({ showStudentDetailsBool, student }) => {
  // State for Textbox
  const [notes, setNotes] = useState({ commenter: "", comment: "" });
  // To add to the notes array
  const [newNotes, setNewNotes] = useState(student.notes);

  let percentAchieved = document.querySelectorAll("p#percentAchieved");

  const onTrackToGraduate = (student) => {
    if (
      student.certifications.resume === true &&
      student.certifications.linkedin === true &&
      student.certifications.github === true &&
      student.certifications.mockInterview === true &&
      student.codewars.current.total > 600
    ) {
      return <h4 className="graduate">On-track to Graduate: ✅</h4>;
    } else {
      return <h4 className="graduate">On-track to Graduate: ❌</h4>;
    }
  };

  const inputChange = (e) => {
    setNotes({ ...notes, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewNotes([...newNotes, notes]);
    setNotes({ commenter: "", comment: "" });
  };

  const scoresDisplayColor = () => {
    percentAchieved.forEach((el) => {
      if (
        Math.round(
          (student.codewars.goal.total / student.codewars.current.total) * 100
        ) >= 99
      ) {
        el.className = "good";
      }
      if (
        Math.round(
          (student.codewars.goal.total / student.codewars.current.total) * 100
        ) > 49 &&
        Math.round(
          (student.codewars.goal.total / student.codewars.current.total) * 100
        ) < 100
      ) {
        el.className = "medium";
      }
      if (
        Math.round(
          (student.codewars.goal.total / student.codewars.current.total) * 100
        ) < 50
      ) {
        el.className = "bad";
      }
    });
  };

  console.log(percentAchieved);

  return (
    <>
      {showStudentDetailsBool ? (
        <>
          <section className="studentStats">
            {" "}
            <article>
              <h4>Codewars</h4>
              <p>Current Total: {student.codewars.current.total}</p>
              <p>Last Week:{student.codewars.current.lastWeek}</p>
              <p>Goal:{student.codewars.goal.total}</p>
              <p id="percentAchieved" className={scoresDisplayColor}>
                Percent of Goal Achieved:{" "}
                {Math.round(
                  (student.codewars.goal.total /
                    student.codewars.current.total) *
                    100
                )}
                %{" "}
              </p>
            </article>
            <article>
              <h4>Scores</h4>
              <p>
                Assignments:{" "}
                {Math.round(student.cohort.scores.assignments * 100)}%
              </p>
              <p>
                Projects: {Math.round(student.cohort.scores.projects * 100)}%
              </p>
              <p>
                Assesments:{" "}
                {Math.round(student.cohort.scores.assessments * 100)}%
              </p>
            </article>
            <article>
              <h4>Certifications</h4>
              <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
              <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
              <p>
                Mock Interview:{" "}
                {student.certifications.mockInterview ? "✅" : "❌"}
              </p>
              <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
              {onTrackToGraduate(student)}
            </article>
          </section>

          <form id="notesForm" onSubmit={handleSubmit}>
            <article>
              <h4>1-on-1 Notes</h4>
              <label htmlFor="commenter">
                Commenter Name:
                <input
                  id="commenter"
                  type="text"
                  name="commenter"
                  onChange={inputChange}
                  value={notes.commenter}
                ></input>
              </label>
            </article>
            <article>
              <label htmlFor="comment">
                Add Note:
                <input
                  id="comment"
                  type="text"
                  name="comment"
                  onChange={inputChange}
                  value={notes.comment}
                ></input>
              </label>
            </article>
            <button type="submit">Add Note</button>
            <ul>
              {newNotes.map((note) => {
                return (
                  <li>
                    {note.commenter} {note.comment}
                  </li>
                );
              })}
            </ul>
          </form>
        </>
      ) : null}
    </>
  );
};

export default StudentDetails;
