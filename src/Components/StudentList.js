import Student from "./Student";
import Form from "./Form";
import "./studentList.css";
import { useState } from "react";
export default function StudentList({
  totalOption,
  studentListOPtion,
  titleOption
}) {
  

  return (
    <div className="StudentList">
      <h2>{titleOption}</h2>
      <p>
        Total Students: <span>{totalOption}</span>
      </p>
      {/* //!function with condition to update the state of student count in total */}
      <div className="List">
        {studentListOPtion.map((record) => {
          //! DOB Format
          const dateFormat = new Date(record.dob);
          // console.log(record.certifications.resume)
   return (

     <Student record={record} dateFormat={dateFormat} />
  
   )
          
        })}
      </div>
      <br />
      <br />
      {/* <Student handleShowMoreBtn={handleShowMoreBtn}></Student> */}
    </div>
  );
}
