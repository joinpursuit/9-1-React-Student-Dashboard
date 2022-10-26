import { useState } from "react";
import StudentDetails from "./StudentDetails";

const Student = ({ student, resetStudentDetails }) => {
  const [showStudentDetailsBool, setShowStudentDetailsBool] = useState(false);

  const showStudentDetails = () => {
    setShowStudentDetailsBool(!showStudentDetailsBool);
  };

  //**********testing */

  const resetStudent = () => {
    setShowStudentDetailsBool(resetStudentDetails);
  };

  //************** */

  return (
    <div id={student.id} onLoad={resetStudent}>
      <img src={student.profilePhoto} alt={student.profilePhoto}></img>
      <h4>
        {student.names.preferredName} {student.names.middleName}{" "}
        {student.names.surname}
      </h4>
      <p>{student.username}</p>
      <p>Birthday: {student.dob}</p>
      <button onClick={showStudentDetails}>
        {!showStudentDetailsBool ? "Show More..." : "Show Less..."}
      </button>
      <StudentDetails
        showStudentDetailsBool={showStudentDetailsBool}
        student={student}
      />
    </div>
  );
};

export default Student;
