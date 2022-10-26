import React, { useState } from "react";
import "./Students.css";
import ShowMore from "./ShowMore";
// import "./Form.css";
import StudentData from "./StudentData";

function Students({ Data }) {
  const studentData = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(dob);

    return <StudentData el={el} birthday={birthday} />;
  });

  return <div className="divReturn">{studentData}</div>;
}

export default Students;
