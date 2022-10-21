import React from 'react';
import './Students.css';

function Students({ Data }) {
  const studentDetails = Data.map((el) => {
    return (
      <article key={el.id} className="article">
        <img
          className="image"
          src={el.profilePhoto}
          alt={el.names.preferredName}
        />
        <div className="individual-card">
          <h3>
            {el.names.preferredName} {el.names.middleName.charAt(0)}.{' '}
            {el.names.surname}
          </h3>
          <p>{el.username}</p>
          <p>
            <span>Birthday:</span> {el.dob}
          </p>
          <button className="student-show-more">Show more ...</button>
        </div>
      </article>
    );
  });
  return <div className="student-cards">{studentDetails}</div>;
}

export default Students;
