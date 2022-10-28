import React from "react";
// import Student from "./Student";
import Studentdet from "./Studentdet"

function AllStudents({ students, notes, setNotes }) {
  
  return (
    <div>
      {students.map((student) => (
        <Studentdet notes={notes} setNotes={setNotes} key={student.id} student={student}/>
      ))}
    </div>
  );
}

export default AllStudents;
