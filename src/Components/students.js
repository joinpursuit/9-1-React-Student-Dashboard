import "./student.css"

const students = ({student, Additionalinfo}) => {
    

    return (
        <section>
            <h3>All Students</h3>
            <p>Total Students: {student.length}</p>
            <div className="student-info">
                <ul>
                    {student.map((info) => {
                        return (
                            <li className="student-details"key={info.id}>
                                <p>{info.names.preferredName} {info.names.middleName.slice(0, 1)}. {info.names.surname}</p>
                                <p>{info.username}</p>
                                <p>Birthdate: {info.dob}</p>
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