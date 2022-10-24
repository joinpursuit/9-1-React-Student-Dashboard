import { useState } from "react";
import StudentInfo from "./StudentInfo";

export default function Student({ student }) {
  const [showMore, setShowMore] = useState(false);

  function formatDob(date) {
    let newDate = new Date(date);
    const newDateArray = newDate.toDateString().split(" ");
    return `${newDateArray[1]} ${newDateArray[2]}, ${newDateArray[3]}`;
  }

  return (
    <li className="student">
      <StudentInfo student={student} />
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
