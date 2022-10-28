import ShowDetails from "./ShowDetails"

function StudentsList({
  students,
  toggleSetNewShowMe,
  ShowDetails,
  selectCohort,
}) {
  function ontrack(students, ShowDetails) {
    if (
      students.certifications.resume === true &&
      students.certifications.lindedin === true &&
      students.certifications.github === true &&
      students.certifications.mockInterview === true &&
      students.current.total > 600
    ) {
      return "On track to Graduate"
    }
  }
  const filteredStudents = students.filter(
    (students) => selectCohort === students.cohort.cohortCode
  )

  return (
    <>
      <section className="students-list">
        <button onClick={filteredStudents}>All Students</button>
        <p>
          Total Students:
          <span>{students.length}</span>
        </p>
        <div className="student-card">
          {students.map((student) => {
            return (
              <article className="student-card">
                <div key={student.id}>
                  <img
                    src={student.profilePhoto}
                    alt={student.names.preferredName}
                  />
                  <div className="student-info">
                    <aside>
                      <h3>
                        {student.names.preferredName}{" "}
                        {student.names.middleName.slice(0, 1)}{" "}
                        {student.names.surname}
                      </h3>
                      <p>{student.username}</p>
                      <p>
                        <span>Birthday: </span>
                        {student.dob}
                      </p>
                      <ShowDetails students={students} />
                    </aside>
                  </div>
                  <p className="on-track">{ontrack}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default StudentsList
