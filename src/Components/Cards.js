import React, { useState } from 'react';
import ScoreCard from './ScoreCard';



function Cards({ formatDate, deets }) {
    const [show, setShow] = useState(false)

    function handleClick() {
        setShow(!show);
      }

      function graduationTrack() {
        if (deets.certifications.resume === true &&
          deets.certifications.linkedin === true &&
          deets.certifications.mockInterview === true &&
          deets.certifications.github === true &&
          deets.codewars.current.total > 600)
          return <p><b>On track to Graduate</b> </p>;
      }


    return (
        
            <article key={deets.id} className="article">
        <img
          className="image"
          src={deets.profilePhoto}
          alt={deets.names.preferredName}
        />
        <div>
          <aside className="individual">
            <h3>{deets.names.preferredName} {deets.names.middleName.charAt(0)}. {deets.names.surname}</h3>
            <p>{deets.username}</p>
            <p><span>Birthday:</span> {formatDate}</p>
            <button className='toggle' onClick={() => handleClick()}>
            {!show ? 'Show More ...' : 'Show Less...'}
            </button>
          </aside>

          {show && <ScoreCard deets={deets} />}
          </div>
          <p>{graduationTrack()}</p>
      </article>
        
    );
}

export default Cards;