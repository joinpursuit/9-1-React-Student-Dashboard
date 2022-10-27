import Details from "./Details"

export default function Students ({ students, cohort, comments, handleSubmit }){

    //Rendering of Students component using .map() method
    return (
        <div>
            <h2>{cohort} | <span id="total">Total Students: {students.length}</span></h2>
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
                                    <section>
                                        <h3>{fullName}</h3>
                                        <p id="email">{student.username}</p>
                                        <p><span>Birthday: </span>{student.dob}</p>
                                    </section>
                                    <aside>
                                        {
                                            student.certifications.resume
                                            &&
                                            student.certifications.linkedin
                                            &&
                                            student.certifications.github
                                            &&
                                            student.certifications.mockInterview
                                            &&
                                            student.codewars.current.total > 600
                                            &&
                                            <p style={{color:"green"}}>On Track to Graduate</p>
                                        }
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