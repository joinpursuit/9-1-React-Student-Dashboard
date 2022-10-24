import "./student.css"

const students = ({studentClass, Additionalinfo}) => {
 
    return (
        <section>
            <div className="total">
             <h2>{studentClass.length === 250 ? "All Students" : 
             studentClass.map((map , i) => {
                if(i === 0){
                    return (
                        map.cohort.cohortCode.replace(/\d+/g, '') + " " + map.cohort.cohortCode.replace(/\D/g,'')
                    )
                }
             })}</h2> 
            <p>Total Students: {studentClass.length}</p>
            </div>
            <div className="student-info">
                <ul className="student-list">
                    {studentClass.map((info) => {
                         const date = new Date(info.dob).toDateString()
                        return (
                            <li className="student-details"key={info.id}>
                                <section className="profile-picture">
                                <img src={info.profilePhoto} alt={info.profilePhoto}></img>
                                </section>
                                <section className="student-info">
                                <p>{info.names.preferredName} {info.names.middleName.slice(0, 1)}. {info.names.surname}</p>
                                <p>{info.username}</p>
                                <p>Birthdate: {date.substring(4)}</p>
                                <p>{info.certifications.resume && info.certifications.linkedin && info.certifications.github && info.certifications.mockInterview && info.codewars.current.total > 600 ? `On Track to Graduate` : null}</p>
                                </section>
                                <section>
                                <Additionalinfo info={info}/>
                                </section>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
export default students