import React from "react";
import "./Students.css";
// import ShowMore from "./ShowMore";

function Students({ Data }) {
  //   console.log(Data);
  const studentData = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(dob);
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
            {birthday}
          </p>
          <button id="showMore">Show More ...</button>
          {/* <ShowMore details={details} /> */}
        </div>
      </article>
    );
  });

  return <div className="divReturn">{studentData}</div>;
}

export default Students;
