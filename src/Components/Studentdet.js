import React from "react";
import OnTrack from "./OnTrack";
import "./Student.css";
import Student from "./Student";


function Studentdet({ student, notes, setNotes, Students }) {
  const date = new Date(student.dob);
  const options = { month: "long" };
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", options).format(date);
  const year = date.getFullYear();
  return (
    <div className="studentinfo">
      <aside>
        <div className="eachstudentinfo">
          <img
            className="profpic"
            src={student.profilePhoto}
            alt="profilepic"
          />
          <aside>
            <h3>
              {student.names.preferredName} {student.names.middleName}{" "}
              {student.names.surname}
            </h3>
            <p>{student.username}</p>
            <p>
              <span className="birthday">Birthday: </span>
              {month} {day}, {year}
            </p>
          </aside>
          <div className="ontrack">
            <OnTrack student={student} />
          </div>
          <div>
            <Student student={student} notes={notes} setNotes={setNotes} />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Studentdet;
