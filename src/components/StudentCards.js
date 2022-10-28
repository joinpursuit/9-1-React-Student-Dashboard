import { useState } from 'react'
import './StudentCards.css'
export default function StudentCards({names, profilePhoto, username, dob, certifications, codewars, cohort, notes}){
    //Code in all is a destructured method. I'm told there's other ways to do it but I liked this. 
    const [toggle, setToggle] = useState(false)
    const [commenter, setCommenter] = useState('')
    const [comment, setComment] = useState('')
    const [comments] = useState(notes)
    const [yes, setYes] = useState(false)
 
    const handleClick = () => {
        if(toggle === false){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }

    function handleComment(e){
        e.preventDefault()
        setCommenter('')
        setComment('')
        commentEntry() 
    }

    function commentEntry(){
      const test = {...comments, commenter: commenter, comment: comment}
      comments.push(test)
    }

  const onTrack = () => {
        if (
          certifications.resume === true &&
          certifications.lindedin === true &&
          certifications.github === true &&
          certifications.mockInterview === true &&
          codewars.current.total > 600
        ) {
         setYes(true)
      }else{
        setYes(false)
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
        <div className='student-cards'>
         <img src={profilePhoto}></img>
        <h2 className='h2'><span>{`${names.preferredName} ${names.middleName} ${names.surname}`}</span>
        </h2>
        <p className="onTrack">{!onTrack ? "On Track" : "Not On Track"}</p>
        {/* When trying to style in line and in CSS would not apply or break the page. Also not working how it is meant to */}
        <p><span>{username}</span></p>
        <p>Birthday: <span>{dob}</span></p>
        <br/>
        <button className="show" onClick={handleClick}>{!toggle ? "Show More": "Show Less"}</button>
        {/* My Favorite Line of Code because its cute and I barely comprehend how to create Tenerary */}
        <br/>
        <form className="form" onSubmit={handleComment}>
            <h2>1 On 1 Notes</h2>
            <br/>
            <div>
                <label>
                    Commenter:
                    <input 
                    type="text"
                    value={commenter}
                    onChange={(e) => setCommenter(e.target.value)}
                    required/>
                </label>
                <br/>
                <br/>
                <label>
                    Comment:
                    <input
                    type='text' 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required/>
                </label>
                <br/>
                <br/>
                <input className='commentButton'type="submit" value="Add comment"/>
                <br/>
                <br/>
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
        </form>
             <section>{showMore()}</section>
        </div>
    </main>
    )
  
    
} 