import { useState } from "react"
import "./Additionalinfo.css"
import Comments from "./comments"
import Form from "./form"


const Additionalinfo = ({info}) => {
    const percent = Number(((info.codewars.current.total /info.codewars.goal.total) * 100).toFixed(2))
    
    const [comment, setComment] = useState(info.notes)
    
    function handleComment(comments){
        setComment([...comment, comments])
    }
    

    const [showInfo, setShowInfo] = useState(false)
    
    function toggleInfo(){
        setShowInfo(!showInfo)
    }
     
    function handleColor(){
        if(percent >= 100){
            return  <p>Percent of Goal Achieved: <span style={{color: "green"}}>{percent}%</span></p>
        }
        if(percent < 100){
            if(percent >= 50){
                return  <p>Percent of Goal Achieved: <span style={{color: "khaki"}}>{percent}%</span></p>
            }
        }
        if(percent < 50){
            return  <p>Percent of Goal Achieved: <span style={{color: "red"}}>{percent}%</span></p>
        }
    }
    
    return(
        <div>
        <button className="show-more"onClick={toggleInfo}>{!showInfo ? "Show More...": "Show Less..."}</button>
            {showInfo ? (
                <div className="student-info">
                    <section className="codewars">
                    <h4>Code Wars:</h4>
                    <p>Current Total: {info.codewars.current.total}</p>
                    <p>Last Week: {info.codewars.current.lastWeek}</p>
                    <p>Goal: {info.codewars.goal.total}</p>
                    {handleColor()}
                    </section>
                    <section className="scores">
                        <h4>Scores:</h4>
                        <p>Assignments: {info.cohort.scores.assignments * 100}%</p>
                        <p>Projects: {info.cohort.scores.projects * 100}%</p>
                        <p>Assesments: {info.cohort.scores.assessments * 100}%</p>
                    </section>
                    <section className="certification">
                        <h4>Certification</h4>
                        <p>Resume: {info.certifications.resume ? "✅" : "❌"}</p>
                        <p>Linkedin: {info.certifications.linkedin ? "✅" : "❌"}</p>
                        <p>Github: {info.certifications.github ? "✅" : "❌"}</p>
                        <p>MockInterview: {info.certifications.mockInterview ? "✅" : "❌"}</p>
                    </section>
                    <h3>1-on-1 Note:</h3>
                    <br></br>
                     <Form handleComment={handleComment}/>
                     <br></br>
                    <Comments comment={comment} />
                </div>
            ): null}
        </div>
    )
}

export default Additionalinfo