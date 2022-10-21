import "./student.css"

const students = ({student, Additionalinfo}) => {
    

    return (
        <section>
            <h3>All Students</h3>
            <p>Total Students: {student.length}</p>
            <div className="student-info">
                <ul>
                    {student.map((info) => {
                         const date = new Date(info.dob).toDateString()
                        return (
                            <li className="student-details"key={info.id}>
                                <img src={info.profilePhoto} alt={info.profilePhoto}></img>
                                <p>{info.names.preferredName} {info.names.middleName.slice(0, 1)}. {info.names.surname}</p>
                                <p>{info.username}</p>
                                <p>Birthdate: {date.substring(4)}</p>
                                <p>{info.certifications.resume && info.certifications.linkedin && info.certifications.github && info.certifications.mockInterview ? `On Track to Graduate` : null}</p>
                                <Additionalinfo info={info}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
export default students