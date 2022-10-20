import { useState } from "react";

export default function Main({students}) {

    const [showDetail, setShowDetail] = useState(false);

    function toggleStudentDetail() {
      setShowDetail(!showDetail);
    }

    return(
        <div className="main">
            <section className="students-list">
            <h2>All Students</h2>
            <p>Total Students:
                <span></span>
            </p>
            <div className="student-cards">
                {students.map((student) =>{
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
                                 <p className="on-track"></p>
                            </div>
                        </article>
                    )
                })}

            </div>


            </section>
        </div>
    )
}