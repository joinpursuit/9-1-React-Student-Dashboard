import React, { useState } from "react";
import ShowMore from "./ShowMore";
// import Form from "./Form";

function StudentData({ el, birthday }) {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <article className="studentsArticle" key={el.id}>
      <img src={el.profilePhoto} alt={el.names.preferredName}></img>
      <div className="studentCards">
        <h3>
          {el.names.preferredName} {el.names.middleName.charAt(0)}.{" "}
          {el.names.surname}
        </h3>
        <p>{el.username}</p>
        <p>
          <span>Birthday: </span>
          {birthday}
        </p>
        <button
          key={el.id}
          id="showMoreButton"
          onClick={() => toggleShowMore(el.id)}
        >
          {!showMore ? "Show More ..." : "Show Less ..."}
        </button>
      </div>
      {showMore && <ShowMore el={el} />}
    </article>
  );
}
export default StudentData;
