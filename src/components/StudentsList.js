import ShowDetails from "./ShowDetails"

function StudentsList({
  dataList,
  toggleSetNewShowMe,
  ShowDetails,
  selectCohort,
}) {
  function ontrack(dataList) {
    if (
      dataList.certifications.resume === true &&
      dataList.certifications.lindedin === true &&
      dataList.certifications.github === true &&
      dataList.certifications.mockInterview === true &&
      dataList.current.total > 600
    ) {
      return "On track to Graduate"
    }
  }
  const filteredStudents = dataList.filter(
    (students) => selectCohort === students.cohort.cohortCode
  )

  return (
    <section className="students-list">
      <button onClick={filteredStudents}>All Students</button>
      <p>
        Total Students:
        <span>{dataList.length}</span>
      </p>
      <div className="student-card">
        {dataList.map((dataLists) => {
          return (
            <article className="student-card">
              <div key={dataLists.id}>
                <img
                  src={dataLists.profilePhoto}
                  alt={dataLists.names.preferredName}
                />
                <div className="student-info">
                  <aside>
                    <h3>
                      {dataLists.names.preferredName}{" "}
                      {dataLists.names.middleName} {dataLists.names.surname}
                    </h3>
                    <p>{dataLists.username}</p>
                    <p>
                      <span>Birthday: </span>
                      {dataLists.dob}
                    </p>
                  </aside>
                </div>
                <p className="on-track">{ontrack}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default StudentsList
