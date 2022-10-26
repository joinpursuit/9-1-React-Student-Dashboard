import React, { useState } from 'react';
import StudentScoreCard from './StudentScoreCard';
import Form from './Form';

function Article({ el, birthday }) {
  const [showData, setShowData] = useState(false);
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
            <p> {!showData ? 'Show More ...' : 'Show Less...'}</p>
          </button>
        </aside>
        {showData ? <StudentScoreCard el={el} /> : null}
        {showData ? <Form /> : null}
      </div>
    </article>
  );
}

export default Article;
