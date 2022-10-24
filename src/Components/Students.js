import { useState } from "react";
import Student from "./Student";
const Students = ({ students }) => {
  return (
    <div className={students}>
      <h2>All Students</h2>
      <h4>{students.length}</h4>

      {students.map((student) => {
        return (
          <>
            <Student student={student} />;
          </>
        );
      })}
    </div>
  );
};

export default Students;
