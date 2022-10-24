import { useState } from "react";

const Student = ({ student }) => {
  return (
    <div id={student.id}>
      <img src={student.profilePhoto} alt={student.profilePhoto}></img>
      <h4>{student.names.preferredName}</h4>
      <p>{student.username}</p>
      <button>Show More...</button>
    </div>
  );
};

export default Student;
