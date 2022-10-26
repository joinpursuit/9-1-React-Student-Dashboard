// import Student from "./Student";

const StudentDetails = ({ showStudentDetailsBool, student }) => {
  console.log(student);
  return (
    <>
      {showStudentDetailsBool ? (
        <div className="studentDetails">
          <h4>Codewars</h4>
          <p>Current Total: {student.codewars.current.total}</p>
          <p>Last Week:{student.codewars.current.lastWeek}</p>
          <p>Goal:{student.codewars.goal.total}</p>
          <p>
            Percent of Goal Achieved:{" "}
            {Math.round(
              (student.codewars.goal.total / student.codewars.current.total) *
                100
            )}
            %{" "}
          </p>
          <h4>Scores</h4>
          <p>Assignments: {student.cohort.scores.assignments}%</p>
          <p>Projects: {student.cohort.scores.projects}%</p>
          <p>Assesments: {student.cohort.scores.assessments}%</p>
          <h4>Certifications</h4>
          <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
          <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
          <p>
            Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}
          </p>
          <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>

          {/* {attendees.map((attendee, index) => (
              <>
                <Attendee
                  index={index}
                  attendee={attendee}
                  updateEventAttendance={updateEventAttendance}
                />
              </>
            ))} */}
        </div>
      ) : null}
    </>
  );
};

export default StudentDetails;
