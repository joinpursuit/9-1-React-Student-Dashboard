import { useState } from 'react'
import {FcCheckmark} from 'react-icons/fc'
import {VscChromeClose} from 'react-icons/vsc'
import Notes from '../Components/Notes'

export default function Details ({ student, comments, handleSubmit }){

    //Declare state variables for show/hide button
    const [showDetails, setShowDetails] = useState(false)

    //Define variable for percentage of codewars goal
    let percent = (student.codewars.current.total / student.codewars.goal.total * 100).toFixed(0)

    return (
     <>
        <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'See Less...' : "See More..."}</button>
        <div>
        {/* Ternary to show/hide details when button clicked*/}
        {
            showDetails 
            ?
            (
            <>
                <section className="details" id={student} key={student.id}>
                    <div className="codewars">
                        <h4>Codewars</h4>
                        <p>Current Total: {student.codewars.current.total}</p>
                        <p>Last Week: {student.codewars.current.lastWeek}</p>
                        <p>Goal: {student.codewars.goal.total}</p>
                            {percent >= 100 && <p>Percent of goal achieved: <span style={{color: "green"}}>{percent}%</span></p>}
                            {percent > 50 && percent < 100 && <p>Percent of goal achieved: <span style={{color: "yellow"}}>{percent}%</span></p>}
                            {percent <= 50 && <p>Percent of goal achieved: <span style={{color: "red"}}>{percent}%</span></p>}
                    </div>
                    <div className="scores">
                        <h4>Scores</h4>
                        <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                        <p>Projects: {student.cohort.scores.projects * 100}%</p>
                        <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                    </div>
                    <div className="certifcations">
                        <h4>Certifications</h4>
                        <p>Resume: {student.certifications.resume ? <FcCheckmark/> : <VscChromeClose/> }</p>
                        <p>LinkedIn: {student.certifications.linkedin ? <FcCheckmark/> : <VscChromeClose/> }</p>
                        <p>Github: {student.certifications.github ? <FcCheckmark/> : <VscChromeClose/> }</p>
                        <p>Mock Interview: {student.certifications.mockInterview ? <FcCheckmark/> : <VscChromeClose/> }</p>
                    </div>
                </section>
                <Notes
                    student={student}
                    comments={comments}
                    handleSubmit={handleSubmit}
                />
            </>
            )
            :
            null
        }
        </div>
    </>
    )
    
}