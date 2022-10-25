import React from "react";
import "./Students.css";
import ShowMore from "./ShowMore";
import Form from "./Form";
// import "./Form.css";

function Students({ Data }) {
  //   console.log(Data);
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
          <button id="showMoreButton">Show More ...</button>
        </div>
        <ShowMore el={el} />
        <div className="form">
          <Form />
          {/* <ul>
            {el.notes.commenter}: {el.notes.comment}
          </ul> */}
        </div>
      </article>
    );
  });

  return <div className="divReturn">{studentData}</div>;
}

export default Students;
