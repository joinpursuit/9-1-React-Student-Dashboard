import React from 'react';
import StudentScoreCard from './StudentScoreCard';
import './Students.css';

function Students({ Data }) {
  const studentDetails = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    }).format(dob);

    // console.log(birthday);
    return (
      <article key={el.id} className="article">
        <img
          className="image"
          src={el.profilePhoto}
          alt={el.names.preferredName}
        />
        <div>
          <aside className="individual-card">
            <h3>
              {el.names.preferredName} {el.names.middleName.charAt(0)}.{' '}
              {el.names.surname}
            </h3>
            <p>{el.username}</p>
            <p>
              <span>Birthday:</span> {birthday}
            </p>
            <button className="student-show-more">Show more ...</button>
          </aside>
          <StudentScoreCard el={el} />
        </div>
      </article>
    );
  });
  return <div className="student-cards">{studentDetails}</div>;
}

export default Students;
