import React from "react";
import OnTrack from "./OnTrack";
import "./Student.css";

function Studentdet({ student, Students }) {
  const date = new Date(student.dob)
  const options = { month: 'long'};
  const day = date.getDate()
  const month = new Intl.DateTimeFormat('en-US', options).format(date)
  const year = date.getFullYear();
  return (
    <div>
      <div>
        <img className="profpic" src={student.profilePhoto} alt="profilepic" />
      </div>
      <aside>
        <div >
          <h3>
            {student.names.preferredName} {student.names.middleName}{" "}
            {student.names.surname}
          </h3>
          <div className="ontrack">
          <OnTrack student={student} />
          </div>
        </div>
        <p>{student.username}</p>
        <p>
          <span>Birthday: </span>
          {month} {day}, {year}
        </p>
      </aside>
    </div>
  );
}

export default Studentdet;
