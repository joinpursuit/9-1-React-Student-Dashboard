import React from 'react';
import { useState } from 'react';
import StudentScoreCard from './StudentScoreCard';
import './Students.css';
import Form from './Form';

function Students({ Data }) {
  const [showData, setShowData] = useState(false);

  const studentDetails = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    }).format(dob);

    function handleClick() {
      setShowData(!showData);
    }
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
            <button onClick={() => handleClick()} className="student-show-more">
              {!showData ? 'Show More ...' : 'Show Less...'}
            </button>
          </aside>
          {showData ? <StudentScoreCard el={el} /> : null}
          {showData ? <Form /> : null}
        </div>
      </article>
    );
  });
  return <div className="student-cards">{studentDetails}</div>;
}

export default Students;
