import React, { useState } from 'react';
import StudentScoreCard from './StudentScoreCard';
import Article from './Article';
import './Students.css';
import Form from './Form';

function Students({ Data }) {
  const studentDetails = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    }).format(dob);

    return <Article el={el} birthday={birthday} />;
  });
  return <div className="student-cards">{studentDetails}</div>;
}

export default Students;
