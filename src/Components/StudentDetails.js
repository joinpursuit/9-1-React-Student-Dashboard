import { useState } from "react";
// import Student from "./Student";

const StudentDetails = ({ showStudentDetailsBool, student }) => {
  // State for Textbox
  const [notes, setNotes] = useState({ commenter: "", comment: "" });
  // To add to the notes array
  const [newNotes, setNewNotes] = useState(student.notes);

  const inputChange = (e) => {
    setNotes({ ...notes, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewNotes([...newNotes, notes]);
    setNotes({ commenter: "", comment: "" });
  };

  return (
    <>
      {showStudentDetailsBool ? (
        <>
          <section className="studentStats">
            <article>
              <h4>Codewars</h4>
              <p>Current Total: {student.codewars.current.total}</p>
              <p>Last Week:{student.codewars.current.lastWeek}</p>
              <p>Goal:{student.codewars.goal.total}</p>
              <p>
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
              <p>Assignments: {student.cohort.scores.assignments}%</p>
              <p>Projects: {student.cohort.scores.projects}%</p>
              <p>Assesments: {student.cohort.scores.assessments}%</p>
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
