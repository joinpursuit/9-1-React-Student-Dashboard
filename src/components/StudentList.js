import ShowDetails from "./ShowDetails"

function StudentList({ students, ShowDetails, selectedShortCode }) {
  function onTrack() {
    if (
      students.certifications.resume === true &&
      students.certifications.linkedin === true &&
      students.certifications.github === true &&
      students.certifications.mockInterview === true &&
      students.current.total > 600
    )
      return <p>on Track to Graduate</p>
  }

  return (
    <>
      <section className="students-list">
        <button>{selectedShortCode}</button>
        <p>
          Total Students:
          <span className="numchange"> {students.length}</span>
        </p>
        <div className="student-card">
          {students.map((student) => {
            let birthDay = new Date(student.dob)
            return (
              <article className="student-card">
                <div key={student.id}>
                  <img
                    src={student.profilePhoto}
                    alt={student.names.preferredName}
                  />
                  <section
                    className="Graduate_track"
                    style={{ color: "green" }}
                  ></section>
                  <div className="student-info">
                    <aside>
                      <h3>
                        {student.names.preferredName}{" "}
                        {student.names.middleName.slice(0, 1)}.{" "}
                        {student.names.surname}
                      </h3>
                      <p>{student.username}</p>
                      <p>
                        <span>Birthday: </span>
                        {new Intl.DateTimeFormat("en-us", {
                          dateStyle: "long",
                        }).format(birthDay)}
                      </p>
                    </aside>
                  </div>
                </div>
                <ShowDetails student={student} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default StudentList
