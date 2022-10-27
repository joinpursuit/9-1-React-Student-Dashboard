import React, { useState } from 'react';
import StudentScoreCard from './StudentScoreCard';
import './Students.css';

function Article({ el, birthday }) {
  const [showData, setShowData] = useState(false);
  function handleClick() {
    setShowData(!showData);
  }
  function checkGraduation() {
    if (
      el.certifications.resume === true &&
      el.certifications.linkedin === true &&
      el.certifications.mockInterview === true &&
      el.certifications.github === true &&
      el.codewars.current.total > 600
    )
      return <p className="status">On track to Graduate </p>;
  }

  console.log(checkGraduation());

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
            <p> {!showData ? 'Show More ...' : 'Show Less...'}</p>
          </button>
        </aside>
        {showData && <StudentScoreCard el={el} />}
      </div>
      <p>{checkGraduation()}</p>
    </article>
  );
}

export default Article;
