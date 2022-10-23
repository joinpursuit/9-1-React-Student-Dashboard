import { useState } from "react";

export default function Main({students, cohorts,selected}) {
     const [showDetail, setShowDetail] = useState(false);
 
     
    function toggleStudentDetail() {
      setShowDetail(!showDetail);
    }

    return(
        <div className="main">
            <section className="students-list">
            <h2>All Students</h2>
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
                                <p><span>Birthday:</span>{student.dob}</p>
                                 </aside>
                                 <button onClick={toggleStudentDetail}>{!showDetail ? "Show More..." : "Show Less..."}</button>
                            </div>
                                 <p className="on-track"></p>
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
                                    <span>Assignments:</span>
                                    </p>
                                    <p>
                                    <span>Projects:</span>
                                    </p>
                                    <p>
                                    <span>Assessments:</span>
                                    </p>
                                </article>
                                <article>
                                    <h3>Certifications</h3>
                                    <p>
                                    <span>Resume:</span>
                                    </p>
                                    <p>
                                    <span>LinkedIn:</span>
                                    </p>
                                    <p>
                                    <span>Mock Interview:</span>
                                    </p>
                                    <p>
                                    <span>GitHub:</span>
                                    </p>
                                </article>
                                <article className="note-list">
                                    <h4>1-on-1 Notes</h4>
                                    <form>
                                        <label>Commenter names
                                            <input type='text' name="commenter" value></input>
                                        </label>
                                        <label>Comment names
                                            <input type='text' name="comment" value></input>
                                        </label>
                                        <button type="submit">Add Note</button>
                                        <ul></ul>
                                    </form>
                                </article>
                            </section>
                        </article>
                    )
                }) : 
                selected.map((student) =>{
                    return(
                        <article key={student.id} className="student-card">
                            <img src={student.profilePhoto} alt={student.PreferredName}>
                            </img>
                            <div className="student-info">
                                <aside>{student.names.preferredName} {student.names.middleName.charAt(0)} {student.names.surname}
                                <p>{student.username}</p>
                                <p><span>Birthday:</span>{student.dob}</p>
                                 </aside>
                                 <button onClick={toggleStudentDetail}>{!showDetail ? "Show More..." : "Show Less..."}</button>
                            </div>
                                 <p className="on-track"></p>
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
                                    <span>Assignments:</span>
                                    </p>
                                    <p>
                                    <span>Projects:</span>
                                    </p>
                                    <p>
                                    <span>Assessments:</span>
                                    </p>
                                </article>
                                <article>
                                    <h3>Certifications</h3>
                                    <p>
                                    <span>Resume:</span>
                                    </p>
                                    <p>
                                    <span>LinkedIn:</span>
                                    </p>
                                    <p>
                                    <span>Mock Interview:</span>
                                    </p>
                                    <p>
                                    <span>GitHub:</span>
                                    </p>
                                </article>
                                <article className="note-list">
                                    <h4>1-on-1 Notes</h4>
                                    <form>
                                        <label>Commenter names
                                            <input type='text' name="commenter" value></input>
                                        </label>
                                        <label>Comment names
                                            <input type='text' name="comment" value></input>
                                        </label>
                                        <button type="submit">Add Note</button>
                                        <ul></ul>
                                    </form>
                                </article>
                            </section>
                        </article>
                    )
                }
                 )} 

            </div>


            </section>
        </div>
    )
}