import { useState } from "react";
import Students from "./Students";

function StudentDetails({student}) {
    const [showDetails, setShowDetails] = useState(false)
    
    function ToggleStudentDetails() {
        setShowDetails(!showDetails)

    }
    
    return (
       <div className="student-list">
            <img src={student.profilePhoto} alt="Student Portrait"></img>
            <h4>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h4>
            <p>{student.username}</p>
            <p>Birthday: {student.dob}</p>

            <button className="toggle-button" onClick={ToggleStudentDetails}>
                {!showDetails ? "Show More" : "Show Less"}
            </button>

            {showDetails && (
                <div className="student-details">
                    <p>
                        <h4>Codewars:</h4>
                            <p>Current Total: {student.codewars.current.total}</p>
                            <p>Last Week: {student.codewars.current.lastWeek}</p>
                            <p>Goal: {student.codewars.goal.total}</p>
                            <p>Percent Of Goal Achieved: {student.codewars.current.total/student.codewars.goal.total * 100}%</p>
                    </p>
                    <p>
                        <h4>Scores:</h4>
                            <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                            <p>Projects: {student.cohort.scores.projects * 100}%</p>
                            <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                    </p>
                    <p>
                        <h4>Certifications:</h4>
                            <p>Resume:</p>
                            <p>LinkedIn:</p>
                            <p>Mock Interview:</p>
                            <p>GitHub:</p>
                    </p>
                </div>
                        )}
        </div>
                    
)
}

export default StudentDetails;