import Details from "./Details"

export default function Students ({ students, cohort, comments, handleSubmit }){

    //Rendering of Students component using .map() method
    return (
        <div>
            <h2>{cohort}</h2>
            <p>Total Students: {students.length}</p>
            {
                students.map((student) => {

                    //Creating variables to format name
                    const first = student.names.preferredName
                    const middle = student.names.middleName.charAt(0)
                    const last = student.names.surname
                    const fullName = `${first} ${middle}. ${last}`

                    //React component for each student
                        return(
                            <div className="student" key={student.id}>
                                <div className="info">
                                    <img src={student.profilePhoto}/>
                                    <aside>
                                        <h4>{fullName}</h4>
                                        <p>{student.username}</p>
                                        <p><span>Birthday: </span>{student.dob}</p>
                                    </aside>
                                </div>
                                <Details
                                    student={student}
                                    comments={comments}
                                    handleSubmit={handleSubmit}
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}