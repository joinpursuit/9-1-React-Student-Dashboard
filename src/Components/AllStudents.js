import React from "react";
import Student from "./Student";

function AllStudents({ students, notes, setNotes }) {
  
  return (
    <div>
      {students.map((student) => (
        <Student notes={notes} setNotes={setNotes} key={student.id} student={student}/>
      ))}
    </div>
  );
}

export default AllStudents;
