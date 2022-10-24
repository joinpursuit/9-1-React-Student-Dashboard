import React from "react"

function AllStudents({ data }) {
  return (
    <div>
      <h2>All Students</h2>
      <h3>Total Students:{data.length}</h3>
    </div>
  )
}

export default AllStudents
