import ShowDetails from "./ShowDetails"

function StudentList({ students, ShowDetails, selectedShortCode }) {
  // come back to this doing css later to figure out how to make appear
  function onTrack(Students) {
    const graduate = students.map(
      (student) =>
        students.certifications.resume &&
        students.certification.linkedin &&
        students.certifications.github &&
        students.certifications.mockInterview
    )
    if (graduate && students.current.total > 600) {
      return "On track to Graduate"
    } else {
      return null
    }
  }

  console.log(students)
  return (
    <>
      <section className="students-list">
        <button>{selectedShortCode}</button>
        <br></br>
        <br></br>
        <p>
          Total Students:
          <span className="numchange"> {students.length}</span>
        </p>
        <div className="student-card">
          {students.map((student) => {
            //  not best logic function might be better
            let birthDay = new Date(student.dob)
            return (
              <article className="students-card">
                <div key={student.id}>
                  <img
                    src={student.profilePhoto}
                    alt={student.names.preferredName}
                  />
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
                <section
                  className="Graduate_track"
                  style={{ color: "green", backgroundColor: " blue" }}
                >
                  {!onTrack ? "On Track to Graduate" : null}
                </section>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default StudentList
