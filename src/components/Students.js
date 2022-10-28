import Student from "./Student"

function Students({studentData, selectedClass}) {
    
    return (
        <div>
            <h2 className="showing">Currently Showing {selectedClass}</h2>
            <h2 className="totals">Total Students: <span>{studentData.length}</span></h2>
            <div className="students">
            {studentData.map((student) => {
                return <Student student={student} key={student.id} />
            })}
            </div>
        </div>
    )
}

export default Students