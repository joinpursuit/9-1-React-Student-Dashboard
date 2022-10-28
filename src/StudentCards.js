import React, { useState } from "react";
import StudentCard from "./StudentCard";
import myjson from "./data/data.json";
import Cohort from "./Cohort";

export default function StudentCards({ cohort }) {
  const filteredStudents = myjson.filter(
    (student) => student.cohort.cohortCode === cohort
  );
  return (
    <main>
      <h3 className="Total-Students">{cohort}</h3>
      <h4 className="Total-Students">
        Total Students: {filteredStudents.length || myjson.length}
      </h4>
      <StudentCard filteredStudents={filteredStudents} />
    </main>
  );
}
