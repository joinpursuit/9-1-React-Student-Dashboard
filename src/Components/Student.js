import { useState } from "react";

const Student = ({ student }) => {
  const [showStudentDetailsBool, setShowStudentDetailsBool] = useState(false);

  const showStudentDetails = () => {
    setShowStudentDetailsBool(!setShowStudentDetailsBool);
  };

  return (
    <div id={student.id}>
      <img src={student.profilePhoto} alt={student.profilePhoto}></img>
      <h4>
        {student.names.preferredName} {student.names.middleName}{" "}
        {student.names.surname}
      </h4>
      <p>{student.username}</p>
      <p>Birthday: {student.dob}</p>
      <button onClick={showStudentDetails}>Show More...</button>
    </div>
  );
};

export default Student;
