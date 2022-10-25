import { useState } from "react";
import StudentInfo from "./StudentInfo";
import CommentsForm from "./CommentsForm";
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
            <div>
              <h4>1-on-1 Notes</h4>
              <CommentsForm />
              <div className="commenets">Comments</div>
            </div>
          </section>
        </>
      )}
    </li>
  );
}
