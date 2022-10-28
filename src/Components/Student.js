import { useState } from "react";
import StudentDetails from "./StudentDetails";

const Student = ({ student, students, resetStudentDetails }) => {
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
    <div className="studentCard" id={student.id} onLoad={resetStudent}>
      <img
        className="profilePhoto"
        src={student.profilePhoto}
        alt={student.profilePhoto}
      ></img>
      <article className="studentInfo">
        <h3>
          {student.names.preferredName} {student.names.middleName}{" "}
          {student.names.surname}
        </h3>
        <p>{student.username}</p>
        <p>Birthday: {student.dob}</p>
        <button onClick={showStudentDetails}>
          {!showStudentDetailsBool ? "Show More..." : "Show Less..."}
        </button>
      </article>
      <StudentDetails
        showStudentDetailsBool={showStudentDetailsBool}
        student={student}
        students={students}
      />
    </div>
  );
};

export default Student;
