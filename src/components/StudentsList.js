import React from "react"

function StudentsList({ dataList }) {
  console.log(dataList.names)
  return (
    <div className="student-cards">
      <h2>All Students</h2>
      <p>
        Total Students:
        <span>{dataList.length}</span>
      </p>
      <div className="student-cards">
        {dataList.map((datainfo) => {
          return (
            <article className="student-card">
              <div key={datainfo.id}>
                <img src={datainfo.profilePhoto} alt={datainfo.id} />
                <div className="student-info">
                  <aside>
                    <h3>
                      {datainfo.names.preferredName} {datainfo.names.middleName}
                      . {datainfo.names.surname}
                    </h3>
                    <p>{datainfo.username}</p>
                    <p>
                      <span>Birthday:</span>
                      {datainfo.dob}
                    </p>
                  </aside>
                  <button>Show me...</button>
                </div>
                <p className="on-track"></p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default StudentsList
