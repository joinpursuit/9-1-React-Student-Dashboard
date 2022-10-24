import StudentCard from "./StudentCard"

export default function Main({students, cohorts,selected}) {
    return(
        <div className="main">
            <section className="students-list">
            <h2>{!cohorts ? 'All Students': cohorts}</h2>
            <p>Total Students:
                <span>{!selected ? students.length : selected.length}</span>
            </p>
            <div className="student-cards">
                {!cohorts ?  students.map((student) => {return <StudentCard student={student} />}) : 
                selected.map((student) =>{return(<StudentCard student={student} />)})}  
            </div>
            </section>
        </div>
    )
}