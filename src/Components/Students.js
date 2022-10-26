// import { useState } from "react";
import Student from "./Student";
const Students = ({ students, filteredCohortInfoData, cohortClicked }) => {
  return (
    <div className="main">
      <h2>{cohortClicked}</h2>
      <h4>{filteredCohortInfoData.length}</h4>

      {filteredCohortInfoData.map((student) => {
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
