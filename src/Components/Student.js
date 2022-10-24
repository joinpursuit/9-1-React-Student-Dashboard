import { useState } from "react";

export default function Student({ student }) {
  const [showMore, setShowMore] = useState(false);

  function formatDob(date) {
    let newDate = new Date(date);
    const newDateArray = newDate.toDateString().split(" ");
    return `${newDateArray[1]} ${newDateArray[2]}, ${newDateArray[3]}`;
  }

  return (
    <li className="student">
      <div className="profile">
        <img
          className="profilePhoto"
          src={student.profilePhoto}
          alt="profile"
          width="50px"
        />
        <div>
          <h3>
            <span id="firstName">{student.names.preferredName} </span>
            <span id="middleName">
              {student.names.middleName.slice(0, 1)}.{" "}
            </span>
            <span id="lastName">{student.names.surname}</span>
          </h3>
          <p>{student.username}</p>
          <p>Birthday: {formatDob(student.dob)}</p>
        </div>
      </div>
      <p className="showMoreButton" onClick={() => setShowMore(!showMore)}>
        Show more...
      </p>
      {showMore && (
        <>
          <hr></hr>
          <section className="showMoreSection">
            <div>Stats</div>
            <hr></hr>
            <form className="form"></form>
            <div className="commenets">Comments</div>
          </section>
        </>
      )}
    </li>
  );
}
