import React from 'react'
import "./Student.css"

function Studentdet({student, Students}) {
    

  return (
    <div>
      <div>
          <img className="profpic" src={student.profilePhoto} alt="profilepic"/>
        </div>
      <aside>
      <h3>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h3>
        <p>{student.username}</p>
        <p>
          <span>Birthday:</span> 
          {student.dob}
        </p>
        </aside>

    </div>
  )
}

export default Studentdet
