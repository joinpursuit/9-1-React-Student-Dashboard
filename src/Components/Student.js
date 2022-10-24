import { useState } from "react";

const Student = ({ student }) => {
  console.log(student);
  return (
    <div>
      <h4>{student.names.preferredName}</h4>
    </div>
  );
};

export default Student;
