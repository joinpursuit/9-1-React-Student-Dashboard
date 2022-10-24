import { useState } from "react"
import Notes from "./Notes"

export default function ShowMore({student}) {
    const [notes, setNotes] = useState({commenter:'',comment:''})

    const handleChange = (e)=>{
        setNotes({...notes, [e.target.id]: e.target.value})
      }
      const handleSubmit =(e)=>{
        e.preventDefault()
        // setNotes({commenter:'',comment:''})
      }

    return(
        <section className="student-detail">
                                <article>
                                    <h3>Codewars:</h3>
                                    <p>
                                    <span>Current Total:</span> {student.codewars.current.total}
                                    </p>
                                    <p>
                                    <span>Last Week:</span> {student.codewars.current.lastWeek}
                                    </p>
                                    <p>
                                    <span>Goal:</span> {student.codewars.goal.total}
                                    </p>
                                    <p>
                                    <span>Percent of Goal Achieved:</span>
                                    </p>
                                </article>
                                <article>
                                    <h3>Scores</h3>
                                    <p>
                                    <span>Assignments:</span>{student.cohort.scores.assignments * 100}%
                                    </p>
                                    <p>
                                    <span>Projects:</span>{student.cohort.scores.projects * 100}%
                                    </p>
                                    <p>
                                    <span>Assessments:</span>{student.cohort.scores.assessments * 100}%
                                    </p>
                                </article>
                                <article>
                                    <h3>Certifications</h3>
                                    <p>
                                    <span>Resume:</span>{student.certifications.resume === true ? <span>✅</span> : <span>❌</span>}
                                    </p>
                                    <p>
                                    <span>LinkedIn:</span>{student.certifications.linkedin === true ? <span>✅</span> : <span>❌</span>}
                                    </p>
                                    <p>
                                    <span>Mock Interview:</span>{student.certifications.mockInterview === true ? <span>✅</span> : <span>❌</span>}
                                    </p>
                                    <p>
                                    <span>GitHub:</span>{student.certifications.github === true ? <span>✅</span> : <span>❌</span>}
                                    </p>
                                </article>
                                <article className="note-list">
                                    <h4>1-on-1 Notes</h4>
                                    <form onSubmit={handleSubmit}>
                                        <label>Commenter names<input id="commenter" type='text' name="commenter" value={notes.commenter} onChange={handleChange}></input>
                                        </label><br></br>
                                        <label>Comment<input id="comment" type='text' name="comment" value={notes.comment} onChange={handleChange}></input>
                                        </label>
                                        <button type="submit">Add Note</button>
                                        <ul>
                                            {/* {console.log()} */}
                                            {student.notes.map((note)=>{
                                                 if(note.commenter && note.comment){
                                                    return <li>{`${note.commenter} says, '${note.comment}'`}</li>
                                                }
                                            })}
                                            <Notes notes={notes}/>
                                        </ul>
                                    </form>
                                </article>
                            </section>
    )
}