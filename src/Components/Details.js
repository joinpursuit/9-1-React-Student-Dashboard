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
        <button id="detailButton" onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'See Less...' : "See More..."}</button>
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
                        <p><span>Current Total: </span>{student.codewars.current.total}</p>
                        <p><span>Last Week: </span>{student.codewars.current.lastWeek}</p>
                        <p><span>Goal: </span>{student.codewars.goal.total}</p>
                            {percent >= 100 && <p><span>Percent of goal achieved: </span><span style={{color: "green"}}>{percent}%</span></p>}
                            {percent > 50 && percent < 100 && <p><span>Percent of goal achieved: </span><span className='yellow' style={{color: "darkyellow"}}>{percent}%</span></p>}
                            {percent <= 50 && <p><span>Percent of goal achieved: </span><span style={{color: "red"}}>{percent}%</span></p>}
                    </div>
                    <div className="scores">
                        <h4>Scores</h4>
                        <p><span>Assignments: </span><span className={student.cohort.scores.assignments >= 0.7 ? "true" : "false"}>{student.cohort.scores.assignments * 100}%</span></p>
                        <p><span>Projects: </span><span className={student.cohort.scores.projects >= 0.7 ? "true" : "false"}>{student.cohort.scores.projects * 100}%</span></p>
                        <p><span>Assessments: </span><span className={student.cohort.scores.assessments >= 0.7 ? "true" : "false"}>{student.cohort.scores.assessments * 100}%</span></p>
                    </div>
                    <div className="certifcations">
                        <h4>Certifications</h4>
                        <p><span className={`${student.certifications.resume}`}>Resume: </span>{student.certifications.resume ? <FcCheckmark/> : <VscChromeClose/> }</p>
                        <p><span className={`${student.certifications.linkedin}`}>LinkedIn: </span>{student.certifications.linkedin ? <FcCheckmark/> : <VscChromeClose/> }</p>
                        <p><span className={`${student.certifications.github}`}>Github: </span>{student.certifications.github ? <FcCheckmark/> : <VscChromeClose/> }</p>
                        <p><span className={`${student.certifications.mockInterview}`}>Mock Interview: </span>{student.certifications.mockInterview ? <FcCheckmark/> : <VscChromeClose/> }</p>
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