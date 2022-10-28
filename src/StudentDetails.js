import { useState } from "react";
import Students from "./Students";

function StudentDetails({student}) {
    const [showDetails, setShowDetails] = useState(false)
    
    function ToggleStudentDetails() {
        setShowDetails(!showDetails)
    }


  let grade = ((student.codewars.current.total / student.codewars.goal.total) * 100).toFixed(0);

  function colorGrade(grade) {
    if (grade >= 100) {
      return <span style={{ color: "green" }}> {grade} </span>;
    } else if (grade > 49) {
      return <span style={{ color: "yellow" }}> {grade} </span>;
    } else if (grade < 50) {
      return <span style={{ color: "red" }}> {grade} </span>;
    }   
  }
    
    return (
       <div className="student-list">
            <img src={student.profilePhoto} alt="Student Portrait"></img>
            <h4>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h4>
            <p>{student.username}</p>
            <p>Birthday: {student.dob}</p>

            <button className="toggle-button" onClick={() => {ToggleStudentDetails(); colorGrade(grade)}}>
                {!showDetails ? "Show More" : "Show Less"}
            </button>

            {showDetails && (
                <div className="student-details">
                    <p>
                        <h4>Codewars:</h4>
                            <p>Current Total: {student.codewars.current.total}</p>
                            <p>Last Week: {student.codewars.current.lastWeek}</p>
                            <p>Goal: {student.codewars.goal.total}</p>
                            <p>Percent Of Goal Achieved: {colorGrade(grade)}%</p>
                    </p>
                    <p>
                        <h4>Scores:</h4>
                            <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                            <p>Projects: {student.cohort.scores.projects * 100}%</p>
                            <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                    </p>
                    <p>
                        <h4>Certifications:</h4>
                            <p><strong>Resume:</strong> {student.certifications.resume ? "✅" : "❌"}</p>
                            <p><strong>LinkedIn:</strong> {student.certifications.linkedin ? "✅" : "❌"}</p>
                            <p><strong>Mock Interview:</strong> {student.certifications.github ? "✅" : "❌"}</p>
                            <p><strong>GitHub:</strong> {student.certifications.mockInterview ? "✅" : "❌"}</p>
                    </p>

                    <form className="comments">
                        <h2>Comments</h2>
                            <label>Commenter's Name: </label>
                                <input name="commenter" type="text" value={student.notes.commenter}></input>
                            <label>Comment: </label>
                                <input name="comment" type="text" value={student.notes.comment}></input>
                            <button className="comment-button">Add Comment</button>
                    </form>
                </div>
                        )}
        </div>
                    
)
}

export default StudentDetails;