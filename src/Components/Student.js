import React, {useState} from 'react';
import Data from '../data/data.json'

const Student = () => {
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
    const students = Data.map((data) => {
        return (
            <div className="cards" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: "8px", padding: "20px", borderRadius: "8px"}}>
                    <div className='students'>
                        <h4>{data.names.preferredName} {`${data.names.middleName[0].toUpperCase()}.`} {data.names.surname}</h4>
                        <p>{data.username}</p>
                        <p>Birthday: {data.dob}</p>
                        <img className="photo" src={data.profilePhoto} alt="" style={{height: "140px", width:"140px"}} />
                        <p>Show More...</p>
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
                </div>
        )
    })

    return (
        <div>
            {students}
        </div>
    );
};

export default Student;