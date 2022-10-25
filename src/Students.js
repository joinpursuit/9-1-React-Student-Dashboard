import React, { useState } from "react";
import "./Students.css";
import ShowMore from "./ShowMore";
// import "./Form.css";

function Students({ Data }) {
  //   console.log(Data);

  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  const studentData = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(dob);
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
  });

  return <div className="divReturn">{studentData}</div>;
}

export default Students;
