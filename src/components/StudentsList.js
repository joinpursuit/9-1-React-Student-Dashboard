import React from "react"
import ShowDetails from "./ShowDetails"

function StudentsList({ dataList, toggleSetNewShowMe, ShowDetails }) {
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
  return (
    <div className="student-cards">
      <h2>All Students</h2>
      <p>
        Total Students:
        <span>{dataList.length}</span>
      </p>
      <div className="studentcards">
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
                      {dataLists.names.middleName}. {dataLists.names.surname}
                    </h3>
                    <p>{dataLists.username}</p>
                    <p>
                      <span>Birthday:</span>
                      {dataLists.dob}
                    </p>
                  </aside>
                  <button onClick={toggleSetNewShowMe}>Show me</button>
                  <ShowDetails dataList={dataList} />
                </div>
                <p className="on-track">{ontrack}</p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default StudentsList
