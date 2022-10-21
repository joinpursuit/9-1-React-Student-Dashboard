import React from "react";
import "./Students.css";

function Students({ Data }) {
  //   console.log(Data);
  const studentData = Data.map((el) => {
    return (
      <article key={el.id}>
        <img src={el.profilePhoto} alt={el.names.preferredName}></img>
        <div className="studentCards">
          <h3>
            {el.names.preferredName} {el.names.middleName.charAt(0)}.{" "}
            {el.names.surname}
          </h3>
          <p>{el.username}</p>
          <p>
            <span>Birthday: </span>
            {el.dob}
          </p>
          <button id="showMore">Show More ...</button>
        </div>
      </article>
    );
  });

  return <div className="divReturn">{studentData}</div>;
}

export default Students;
