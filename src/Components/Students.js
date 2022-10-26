// import { useState } from "react";
import Student from "./Student";
const Students = ({
  students,
  filteredCohortInfoData,
  cohortClicked,
  splitString,
  resetStudentDetails,
}) => {
  return (
    <div className="main">
      <h2>
        {cohortClicked === "All Students"
          ? cohortClicked
          : splitString(cohortClicked)}
      </h2>
      <h4>{filteredCohortInfoData.length}</h4>

      {filteredCohortInfoData.map((student) => {
        return (
          <>
            <Student
              student={student}
              resetStudentDetails={resetStudentDetails}
            />
          </>
        );
      })}
    </div>
  );
};

export default Students;
