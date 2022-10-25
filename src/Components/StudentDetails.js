import React, {useState} from 'react';
import Data from '../data/data.json'

const StudentDetails = () => {
    const [showDetails, setShowDetails] = useState(false)

    function toggleStudentDetails() {
        setShowDetails(!showDetails);
      }

      function percentScore(num1,num2) {
        return Math.round((num1/num2) *100)
    }

    function checkCertificate(x) {
        if (x === true) {
            return "❌"
        } else {
            return "✅"
        }
    }

    function getBirthday() {
        const date = new Date()

        return date.toLocaleDateString('en-US', {
            year:  'numeric',
            month: 'long',
            day:   'numeric',
        })
    }

    Data.map((data) => {
        return (
            <div>
                <a href="#"  onClick={toggleStudentDetails}>{!showDetails ? "Show More..." : "Show Less..."}</a>
                {showDetails ? (
                <div className="student-details">
                        <section>
                            <h4>Codewars</h4>
                            <p>Current Total: {data.codewars.current.total}</p>
                            <p>Last Week: {data.codewars.current.lastWeek}</p>
                            <p>Goal: {data.codewars.goal.total}</p>
                            <p>Percent of Goal Achieved: {percentScore(data.codewars.current.total, data.codewars.goal.total)}%</p>
                            <h4>Scores</h4>
                            <p>Assignments: {data.cohort.scores.assignments * 100}%</p>
                            <p>Projects: {data.cohort.scores.projects * 100}%</p>
                            <p>Assessments: {data.cohort.scores.assessments * 100}%</p>
                            <h4>Certifications</h4>
                            <p>Resume: {checkCertificate(data.certifications.resume)}</p>
                            <p>LinkedIn: {checkCertificate(data.certifications.linkedin)}</p>
                            <p>Mock Interview: {checkCertificate(data.certifications.mockInterview)}</p>
                            <p>Github: {checkCertificate(data.certifications.github)}</p>
                        </section>
                    </div>
                ) : null}
            </div>
        )
    })
       
};

export default StudentDetails;