import React from "react"

function StudentsList({ data }) {
  console.log(data.names)
  return (
    <div className="students">
      <h2>All Students</h2>
      <h3>Total Students: {data.length}</h3>
      <ol>
        {data.map((dataList) => {
          return (
            <li key={dataList.id}>
              <img src={dataList.profilePhoto} alt={dataList.id} />
              <strong>
                {dataList.names.preferredName} {dataList.names.middleName}.{" "}
                {dataList.names.surname}
              </strong>
              <br></br>
              {dataList.username}
              <br></br>
              Birthday: {dataList.dob}
              <button>Show me</button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default StudentsList
