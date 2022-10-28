import { useState } from "react"

function Student ({student}) {
    const [submitInput, setSubmitInput] = useState({
        name: "",
        content: "",
      })
    const [showMore, setShowMore] = useState(false);
    const goalPercent = Math.round((student.codewars.current.total / student.codewars.goal.total) * 100)
    const fullName = `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`
    let onTrack = false
    let percentColor = ""
    let star = ""
    if (student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview && (student.codewars.current.total > 600)) {
        onTrack = true
    } 

    //Share this in presentation
    if (goalPercent >= 100) {
        percentColor = "green"
        star = "⭐"
    } else if (goalPercent >= 50) {
        percentColor = "yellow"
    } else if (goalPercent < 50) {
        percentColor = "red"
    }

    function handleTextChange(event) {
        setSubmitInput({
          ...submitInput,
          [event.target.id]: event.target.value
        })
      }
   
      function handleSubmit (event) {
        event.preventDefault();
        const comment = document.createElement("li")
        comment.innerHTML = `${submitInput.name} says, "${submitInput.content}"`
        document.getElementById(student.id).append(comment)
        setSubmitInput(
          {
            name: "",
            content: "",
          }
        )
      };

     const fixedDate = new Date(student.dob)

    return (
        <div className="student" >
            <h2 className="studentName">{fullName}</h2>
            <p>{onTrack ? <span>Good Noodle ⭐⭐⭐⭐⭐</span> : null}</p>
            <p><span>Contact: </span></p>
            <p>{student.username}</p>
            <p><span>Birthday:</span> {fixedDate.toLocaleDateString()}</p>
            <img src={student.profilePhoto} alt="Picture of Student"/>
            <p className="click" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}...</p>
            <div className="showMore" id={showMore ? "show" : "hidden"}>
                <div className="grades">
                <div className="grade">
                <h3>Codewars:</h3>
                <p><span>Current Total:</span> {student.codewars.current.total}</p>
                <p><span>Last Week:</span> {student.codewars.current.lastWeek}</p>
                <p><span>Goal:</span> {student.codewars.goal.total}</p>
                <p><span>Percent of Goal Achieved:</span> <span className={percentColor}>{goalPercent}%{star}</span></p>
                </div>
                <div className="grade">
                <h3>Scores</h3>
                <p><span>Assignments:</span> {student.cohort.scores.assignments * 100}%</p>
                <p><span>Projects:</span> {student.cohort.scores.projects * 100}%</p>
                <p><span>Assessments:</span> {student.cohort.scores.assessments * 100}%</p>
                </div>
                <div className="grade">
                <h3>Certifications</h3>
                <p><span>Resume:</span>{student.certifications.resume === true ? "⭐" : "❌"}</p>
                <p><span>LinkedIN:</span>{student.certifications.linkedin === true ? "⭐": "❌"}</p>
                <p><span>Mock Interview:</span>{student.certifications.github === true ? "⭐" : "❌"}</p>
                <p><span>Github:</span>{student.certifications.mockInterview === true ? "⭐": "❌"}</p>
                </div>
                </div>
                <section className="notes">
                <h2>1-on-1 Notes</h2>
                <form onSubmit={handleSubmit}>
                    <p>Commenter Name</p>
                    <input 
                    type="text"
                    id="name"
                    value={submitInput.name}
                    onChange={handleTextChange}
                    />
                    <p>Comment</p>
                    <input 
                    type="text"
                    id="content"
                    value={submitInput.content}
                    onChange={handleTextChange}
                    />
                    <input type="submit"/>
                </form>
                <ul className="notes" id={student.id}>
                    {student.notes.length ?
                    student.notes.map((note) => {
                        return  (
                            <li key={student.id}>{note.commenter} says, "{note.comment}"</li>
                        )
                    })
                : null }
                </ul>
            </section>

            </div>
        </div>
    )
}

export default Student