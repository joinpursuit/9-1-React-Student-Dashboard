import Student from "./Student"

function Students({studentData, selectedClass}) {
    
    return (
        <div className="students">
            <h2>Showing {selectedClass}</h2>
            <h4>Total Students: <span>{studentData.length}</span></h4>
            {studentData.map((student) => {
                return <Student student={student} key={student.id} />
            })}
        </div>
    )
}

export default Students