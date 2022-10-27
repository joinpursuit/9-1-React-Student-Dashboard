import React from 'react';
import Article from './Article';
import './Students.css';

function Students({ Data, title, total }) {
  const studentDetails = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    }).format(dob);

    return <Article el={el} birthday={birthday} />;
  });
  const filterByClass = Data.filter(
    (e) => e.cohort.cohortCode === title.split(' ').join('')
  );

  const studentDetails2 = filterByClass.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    }).format(dob);

    return <Article el={el} birthday={birthday} />;
  });

  // return <div className="student-cards">{studentDetails}</div>;
  // return <div className="student-cards">{studentDetails2}</div>;
  return (
    <>
      <p>
        Total Students:{' '}
        <span>{title === 'All Students' ? total : studentDetails2.length}</span>
      </p>
      <div className="student-cards">
        {title === 'All Students' ? studentDetails : studentDetails2}
      </div>
    </>
  );
}

export default Students;
