import React from "react";
import { useState } from "react";
import Fellowdetails from "./Fellowdetails";
import "./Card.css";

function Card({ fellow }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const { id, profilePhoto, names, username } = fellow;

  const dob = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(fellow.dob));

  return (
    <div>
      <article key={id} className="fellow-card">
        <img src={profilePhoto} alt={names.preferredName} />
        <div className="fellow-info">
          <aside>
            <h3>
              {`${names.preferredName} ${names.middleName[0]}. ${names.surname}`}
            </h3>
            <p>{username}</p>
            <p>
              <span>Birthday:</span> {dob}
            </p>
          </aside>
          {showMore ? (
            <button className="fellow-details-toggle" onClick={toggleShowMore}>
              Show Less...
            </button>
          ) : (
            <button className="fellow-details-toggle" onClick={toggleShowMore}>
              Show More...
            </button>
          )}
        </div>

        {showMore ? <Fellowdetails fellow={fellow} /> : null}
      </article>
    </div>
  );
}

export default Card;
