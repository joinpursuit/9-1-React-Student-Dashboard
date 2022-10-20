import { useState } from 'react'
import './Students.css'
export default function Students({names, profilePhoto, username, dob, certifications, codewars, cohort}){
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        if(toggle === false){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }

    const info = () =>{
        if(certifications.resume === true && certifications.linkedin === true && certifications.github === true && certifications.mockInterview === true){
            return (
              <p>On track to Graduate</p>
            )
        }
    }
    const showMore = () =>{
        if(toggle){ 
            return(
                <div>
                <section>
                <h3><span>CODEWARS:</span></h3>
                <p>Current total:{codewars.current.total}</p>
                <p>Last Week:{codewars.current.lastWeek}</p>
                <p>Goal: {codewars.goal.total}</p>
                <p>Percent of Goal Achieved: {((codewars.current.total/codewars.goal.total)*100).toFixed(0)}%</p>
                </section>
                <section>
                <h3><span>Scores</span></h3>
                <p>Assignments:{(cohort.scores.assignments)*100}%</p>
                <p>Projects:{(cohort.scores.projects)*100}%</p>
                <p>Goal:</p>
                <p>Assessments:{(cohort.scores.assessments)*100}%</p>
                </section>
                <section>
                <h3><span>Certifications</span></h3>
                <p>resume:{certifications.resume ? "✓" : "x"}</p>
                <p>LinkeIn:{certifications.resume ? "✓" : "x"}</p>
                <p>Mock Interview:{certifications.mockInterview ? "✓" : "x"}</p>
                <p>Github:{certifications.github ? "✓" : "x"}</p>
                </section>
             </div>
    )
}
}
    return (
    <main>
        <div class='student-cards'>
         <img src={profilePhoto}></img>
        <h3>
        Name: {`${names.preferredName} ${names.middleName} ${names.surname}`}
        </h3>
        <p>{info()}</p>
        <p>Email: {username}</p>
        <p>Birthday: {dob}</p>
        <br></br>
        <button onClick={handleClick}>Show more...</button>
        <section>{showMore()}</section>
        </div>
    </main>
    )
    
}