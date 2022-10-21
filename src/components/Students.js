import { useState } from 'react'
import './Students.css'
export default function Students({names, profilePhoto, username, dob, certifications, codewars, cohort}){

    //WEIRD BIRTHDAY GAP FOUND HERE
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
              <p className='onTrack'>On track to Graduate</p>
            )
        }
    }
    const showMore = () =>{
        if(toggle){ 
            return(
                <div className="student-details">
                <section className='1'>
                <h3><span>CODEWARS:</span></h3>
                <p>Current total:
                <span>
                {codewars.current.total}
                </span></p>
                <p>Last Week:<span>{codewars.current.lastWeek}</span></p>
                <p>Goal: <span>{codewars.goal.total}</span></p>
                <p>Percent of Goal Achieved:  <span>{((codewars.current.total/codewars.goal.total)*100).toFixed(0)}%</span></p>
                </section>
                <section className='2'>
                <h3><span>Scores</span></h3>
                <p>Assignments: <span>{(cohort.scores.assignments)*100}%</span></p>
                <p>Projects: <span>{(cohort.scores.projects)*100}%</span></p>
                <p>Goal: <span>{(codewars.goal.total)}</span></p>
                <p>Assessments: <span>{(cohort.scores.assessments)*100}%</span></p>
                </section>
                <section className='3'>
                <h3><span>Certifications</span></h3>
                <p>Resume:{certifications.resume ? "✅" : "❌"}</p>
                <p>LinkeIn:{certifications.resume ? "✅" : "❌"}</p>
                <p>Mock Interview:{certifications.mockInterview ? "✅" : "❌"}</p>
                <p>Github:{certifications.github ? "✅" : "❌"}</p>
                </section>
             </div>
    )
}
}
    return (
    <main>
        <div class='student-cards'>
         <img src={profilePhoto}></img>
        <h2><span>{`${names.preferredName} ${names.middleName} ${names.surname}`}</span>
        </h2>
        <p>{info()}</p>
        <p><span>{username}</span></p>
        <p>Birthday:<span>{dob}</span></p>
        <br/>
        <button className="show" onClick={handleClick}>Show more...</button>
        <section>{showMore()}</section>
        </div>
    </main>
    )
    
}