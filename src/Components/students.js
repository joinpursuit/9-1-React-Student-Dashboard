

const students = ({student}) => {
    return (
        <section>
            <h3>All Students</h3>
            <p>Total Students: {student.length}</p>
            <div className="student-info">
                <ul>
                    {student.map((info) => {
                        return (
                            <li>
                                <p>{info.names.preferredName} {info.names.middleName.slice(0, 1)}. {info.names.surname}</p>
                                <p>{info.username}</p>
                                <p>Birthdate: {info.dob}</p>
                                <button>Show More...</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default students