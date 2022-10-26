import React from 'react';
import Article from './Article';
import './Students.css';

function Students({ Data, student }) {
  // ! return without using state
  const studentDetails = Data.map((el) => {
    //! // ! return  using state
    // student.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    }).format(dob);

    return <Article el={el} birthday={birthday} />;
  });
  // ! return without using state
  return <div className="student-cards">{studentDetails}</div>;
  // ! return using state
  // return <div className="student-cards">{student}</div>;
}

export default Students;
