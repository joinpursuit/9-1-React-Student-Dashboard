export default function Students ({ students, cohort, setStudents }){

    let studentArr = []

    return (
        <div>
            <h2>All Students</h2>
            <p>Total Students: {students.length}</p>
            {
                students.map((student) => {
                    const first = student.names.preferredName
                    const middle = student.names.middleName.charAt(0)
                    const last = student.names.surname
                    const fullName = `${first} ${middle}. ${last}`

                        return(
                            <div className="student" key={student.id}>
                                <img src={student.profilePhoto}/>
                                <div>
                                    <h4>{fullName}</h4>
                                    <p>{student.username}</p>
                                    <p><span>Birthday: </span>{student.dob}</p>
                                    <button>See more...</button>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}