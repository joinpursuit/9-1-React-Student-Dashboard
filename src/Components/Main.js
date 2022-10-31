import StudentCard from "./StudentCard"

export default function Main({students, cohorts,selected,setStudents,allCohortCodes}) {
    
    let spaceCohort = cohorts.split('')
    spaceCohort.splice(-4,0,' ')
    spaceCohort.join('')

    return(
        <div className="main">
            <section className="students-list">
            <h2>{!cohorts ? 'All Students': spaceCohort}</h2>
            <p>Total Students:
                <span>{!selected ? students.length : selected.length}</span>
            </p>
            <div className="student-cards">
                {!cohorts ?  students.map((student) => {return <StudentCard setStudents={setStudents}students={students}  student={student} />}) : 
                selected.map((student) =>{return(<StudentCard setStudents={setStudents}students={students} student={student} />)})}  
            </div>
            </section>
        </div>
    )
}