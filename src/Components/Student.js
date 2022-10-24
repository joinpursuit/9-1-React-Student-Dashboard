import { useState } from "react";
import StudentInfo from "./StudentInfo";
import Stats from "./Stats";

export default function Student({ student }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <li className="student">
      <StudentInfo student={student} />
      <p className="showMoreButton" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less..." : "Show More..."}
      </p>
      {showMore && (
        <>
          <hr></hr>
          <section className="showMoreSection">
            <Stats student={student} />
            <hr></hr>
            <form className="form"></form>
            <div className="commenets">Comments</div>
          </section>
        </>
      )}
    </li>
  );
}
