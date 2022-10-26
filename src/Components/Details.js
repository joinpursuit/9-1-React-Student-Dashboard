export default function Details ({ student }){

    return (
        <section className="details" id={student} key={student.id}>
            <div className="codewars">
                <h4>Codewars</h4>
                <p>Current Total: {student.codewars.current.total}</p>
                <p>Last Week: {student.codewars.current.lastWeek}</p>
                <p>Goal: {student.codewars.goal.total}</p>
                <p></p>
            </div>
            <div className="scores">
                <h4>Scores</h4>
                <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                <p>Projects: {student.cohort.scores.projects * 100}%</p>
                <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
            </div>
            <div className="certifcations">
                <h4>Certifications</h4>
                <p>Resume: {student.certifications.resume ? 'Yes' : 'No'}</p>
                <p>LinkedIn: {student.certifications.linkedin ? 'Yes' : 'No'}</p>
                <p>Github: {student.certifications.github ? 'Yes' : 'No'}</p>
                <p>Mock Interview: {student.certifications.mockInterview ? 'Yes' : 'No'}</p>
            </div>
        </section>
    )
    
}