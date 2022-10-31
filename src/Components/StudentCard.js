import { useState } from "react";
import ShowMore from "./ShowMore";

export default function StudentCard({student,students,setStudents}) {
    const [showDetail, setShowDetail] = useState(false);
     
    function toggleStudentDetail() {
      setShowDetail(!showDetail);
    }

    return(
        <>
        <article key={student.id} className="student-card">
            <img src={student.profilePhoto} alt={student.preferredName}></img>
            <div className="student-info">
                <aside>{student.names.preferredName} {student.names.middleName.charAt(0)} {student.names.surname}
                     <p>{student.username}</p>
                    <p><span>Birthday:</span>{new Date(student.dob).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"}) }</p>
                 </aside>
                <button onClick={()=>{toggleStudentDetail()}}>{!showDetail ? "Show More..." : "Show Less..."}</button>
            </div>
            <p className="on-track">{student.certifications.resume === true && student.certifications.linkedin === true && student.certifications.github === true && student.certifications.mockInterview === true && student.codewars.current.total > 600 ? 'On Track to Graduate' : null}</p>
            {showDetail ? ( <ShowMore setStudents={setStudents} students={students}  student={student}/> ) : null}
        </article>
        </>
    )
}