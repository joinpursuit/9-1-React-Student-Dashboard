import data from "./data/data.json";
import { useState } from "react";


function StudentDetails({ student }) {
    const [showMore, setShowMore] = useState(true);

    function ToggleStudentDetails() {
        setShowMore(!showMore);
    }

    return (
        <>

        <button onClick={ToggleStudentDetails}>
            {!showMore ? "Show More" : "Show Less"}
        </button>

        {showMore && (
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
        )} 
        {/* End of show more content ternary. */}
        </>
    )
}

export default StudentDetails;

// Explain that you tried using the doggy day care example as a guide and made a new file specifically for the Show More/Show Less button.
// Not entirely sure how to connect that to the Students function and add it to the
// Also not sure on how to solve an equation in HTML.