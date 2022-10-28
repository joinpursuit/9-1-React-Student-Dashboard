import { useState } from "react";
import React from "react";
import { ShowDetails } from "./ShowDetails";
import "./Article.css";
const Article = ({ el }) => {
  const [showDetails, setShowDetails] = useState(false);

  function toggleShowDetails() {
    setShowDetails(!showDetails);
  }
  const birthday = new Date(el.dob);
  const formattedDob = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(birthday);
  return (
    <div className="stu">
      <article className="card">
        <img src={el.profilePhoto} alt={el.names.preferredName}></img>
        <div className="info">
          <aside>
            <h3>
              {el.names.preferredName} {el.names.middleName} {el.names.surname}
            </h3>
            <p>{el.username}</p>
            <p>
              <span>Birthday: </span>
              {formattedDob}
            </p>
          </aside>
          <button key={el.id} onClick={() => toggleShowDetails(el.id)}>
            {!showDetails ? "Show More..." : "Show Less..."}
          </button>
        </div>
        <p className="track">
          {el.codewars.current.total > 600 &&
          el.certifications.resume === true &&
          el.certifications.linkedin === true &&
          el.certifications.mockInterview === true &&
          el.certifications.github === true
            ? "On Track to Graduate"
            : null}
        </p>
        {showDetails && <ShowDetails el={el} />}
      </article>
    </div>
  );
};

export default Article;
