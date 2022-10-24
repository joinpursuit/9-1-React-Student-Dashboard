import { useState } from "react";

export default function Main({students, cohorts,selected,updatedCohortCodes}) {
     const [showDetail, setShowDetail] = useState(false);
     const [notes, setNotes] = useState({commenter:'',comment:''})
 
     
    function toggleStudentDetail() {
      setShowDetail(!showDetail);
      
    }

    const handleChange = (e)=>{
        setNotes({...notes, [e.target.id]: e.target.value})
      }
      const handleSubmit =(e)=>{
        e.preventDefault()
        return <li></li>
      }

      
      console.log(cohorts)

    return(
        <div className="main">
            <section className="students-list">
            <h2>{!cohorts ? 'All Students': cohorts}</h2>
            <p>Total Students:
                <span>{!selected ? students.length : selected.length}</span>
            </p>
            <div className="student-cards">
                {!cohorts ?  students.map((student) =>{
                    return(
                        <article key={student.id} className="student-card">
                            <img src={student.profilePhoto} alt={student.PreferredName}>
                            </img>
                            <div className="student-info">
                                <aside>{student.names.preferredName} {student.names.middleName.charAt(0)} {student.names.surname}
                                <p>{student.username}</p>
                                <p><span>Birthday:</span>{new Date(student.dob).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"}) }</p>
                                 </aside>
                                 <button onClick={()=>{toggleStudentDetail()}}>{!showDetail ? "Show More..." : "Show Less..."}</button>
                            </div>
                            <br></br>
                                 <p className="on-track">{student.certifications.resume === true && student.certifications.linkedin === true && student.certifications.github === true && student.certifications.mockInterview === true && student.codewars.current.total > 600 ? 'On Track to Graduate' : null}</p>
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
                                        </label>
                                        <label>Comment<input id="comment" type='text' name="comment" value={notes.comment} onChange={handleChange}></input>
                                        </label>
                                        <button type="submit">Add Note</button>
                                        <ul>
                                        <li>{`${student.notes.commenter} says, '${student.notes.comment}'`}</li>
                                        </ul>
                                    </form>
                                </article>
                            </section>
                        </article>
                    )
                }) : null
                // selected.map((student) =>{
                //     return(
                //         <article key={student.id} className="student-card">
                //             <img src={student.profilePhoto} alt={student.PreferredName}>
                //             </img>
                //             <div className="student-info">
                //                 <aside>{student.names.preferredName} {student.names.middleName.charAt(0)} {student.names.surname}
                //                 <p>{student.username}</p>
                //                 <p><span>Birthday:</span>{student.dob}</p>
                //                  </aside>
                //                  <button onClick={toggleStudentDetail}>{!showDetail ? "Show More..." : "Show Less..."}</button>
                //             </div>
                //                  <p className="on-track"></p>
                //             <section className="student-detail">
                //                 <article>
                //                     <h3>Codewars:</h3>
                //                     <p>
                //                     <span>Current Total:</span> {student.codewars.current.total}
                //                     </p>
                //                     <p>
                //                     <span>Last Week:</span> {student.codewars.current.lastWeek}
                //                     </p>
                //                     <p>
                //                     <span>Goal:</span> {student.codewars.goal.total}
                //                     </p>
                //                     <p>
                //                     <span>Percent of Goal Achieved:</span>
                //                     </p>
                //                 </article>
                //                 <article>
                //                     <h3>Scores</h3>
                //                     <p>
                //                     <span>Assignments:</span>{student.cohort.scores.assignments * 100}%
                //                     </p>
                //                     <p>
                //                     <span>Projects:</span>{student.cohort.scores.projects * 100}%
                //                     </p>
                //                     <p>
                //                     <span>Assessments:</span>{student.cohort.scores.assessments * 100}%
                //                     </p>
                //                 </article>
                //                 <article>
                //                     <h3>Certifications</h3>
                //                     <p>
                //                     <span>Resume:</span>{student.certifications.resume === true ? <span>✅</span> : <span>❌</span>}
                //                     </p>
                //                     <p>
                //                     <span>LinkedIn:</span>{student.certifications.linkedin === true ? <span>✅</span> : <span>❌</span>}
                //                     </p>
                //                     <p>
                //                     <span>Mock Interview:</span>{student.certifications.mockInterview === true ? <span>✅</span> : <span>❌</span>}
                //                     </p>
                //                     <p>
                //                     <span>GitHub:</span>{student.certifications.github === true ? <span>✅</span> : <span>❌</span>}
                //                     </p>
                //                 </article>
                //                 <article className="note-list">
                //                     <h4>1-on-1 Notes</h4>
                //                     <form onSubmit={handleSubmit}>
                //                         <label>Commenter names <input id="commenter" type='text' name="commenter" value={notes.commenter} onChange={handleChange}></input>
                //                         </label>
                //                         <label>Comment<input id="comment" type='text' name="comment" value={notes.comment} onChange={handleChange}></input>
                //                         </label>
                //                         <button type="submit">Add Note</button>
                //                         <ul>
                //                             {/* <li>{`${student.notes[0].commenter} says, ${student.notes[0].comment}`}</li> */}
                //                         </ul>
                //                     </form>
                //                 </article>
                //             </section>
                //         </article>
                //     )
                }
                 {/* )}  */}

            </div>


            </section>
        </div>
    )
}