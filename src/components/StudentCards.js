import { useState } from 'react'
import './StudentCards.css'
export default function Students({names, profilePhoto, username, dob, certifications, codewars, cohort, notes, setNote}){
    const [toggle, setToggle] = useState(false)
    const [input, setInput] = useState('')
    const [comment, setComment] = useState('')
    //This is ruining code and unsure why

    //States Ruining code... Was working fine before hand unsure whats wrong. 



    const handleClick = () => {
        if(toggle === false){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }

    function handleComment(e){
        e.preventDefault()
        setNote([...notes, {comment: comment, commenter: input}])
        setInput('')
        setComment('')
    }

    const info = () =>{
        if(certifications.resume === true && certifications.linkedin === true && certifications.github === true && certifications.mockInterview === true){
            return (
              <p className='onTrack'>On track to Graduate</p>
            )
        }
    }

    //THIS IS NOT WORKING
    
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
        <div className='student-cards'>
         <img src={profilePhoto}></img>
        <h2 className='h2'><span>{`${names.preferredName} ${names.middleName} ${names.surname}`}</span>
        </h2>
        <p>{info()}</p>
        <p><span>{username}</span></p>
        <p>Birthday: <span>{dob}</span></p>
        <br/>
        <button className="show" onClick={handleClick}>{!toggle ? "Show More": "Show Less"}</button>
        {/* My Favorite Line of Code because its cute and I barely comprehend how to create Tenerary */}
        {/* <form onSubmit={handleComment}>
            <h2>1 On 1 Notes</h2>
            <div>
                <label>
                    <div>Commenter</div>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                </label>
                <label>
                    <div>Comment</div>
                    <input 
                    value={input}
                    onChange={(e) => setComment(e.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="Add comment"/>
                <ul>
                    {notes.map((c) => {
                        return (
                            <li>
                                {c.commenter} said, "{c.comment}"
                            </li>
                        )
                    })}
                </ul>
            </div>
        </form> */}
        <section>{showMore()}</section>
        </div>
    </main>
    )
  
    
}