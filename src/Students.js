import { useState } from "react";
// import StudentDetails from "./StudentDetails"



function Students({ studentData }) {
    const [showMore, setShowMore] = useState(false);

    function ToggleStudentDetails() {
        setShowMore(!showMore)
    }

        return (
            <div>
            { 
                studentData.map((student) => {
                    return (
                        <div>
                        <img src={student.profilePhoto} alt="Student Portrait"></img>
                        <h4>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h4>
                        <p>{student.username}</p>
                        <p>Birthday: {student.dob}</p>

                        <button onClick={ToggleStudentDetails}>
                            {!showMore ? "Show More" : "Show Less"}
                        </button>

                        {showMore ? (
                            <div className="student-details">
                            <p>
                                <h4>Codewars:</h4>
                                <p>Current Total: {student.codewars.current.total}</p>
                                <p>Last Week: {student.codewars.current.lastWeek}</p>
                                <p>Goal: {student.codewars.goal.total}</p>
                                <p>Percent Of Goal Achieved: ({student.codewars.current.total}/{student.codewars.goal.total} * 100)%</p>
                            </p>
                            <p>
                                <h4>Scores:</h4>
                                <p>Assignments: ({student.cohort.scores.assignments} * 100)%</p>
                                <p>Projects: ({student.cohort.scores.projects} * 100)%</p>
                                <p>Assessments: ({student.cohort.scores.assessments} * 100)</p>
                            </p>
                            <p>
                                <h4>Certifications:</h4>
                                <p>Resume:</p>
                                <p>LinkedIn:</p>
                                <p>Mock Interview:</p>
                                <p>GitHub:</p>
                </p>
                            </div>
                        ) : null }

                    </div>
                    ) // End of .map return.
                }) // End of .map function.
            } 
        </div>
    ) // End of entire return which displays elements to the page.
} // End of Students function.


export default Students;