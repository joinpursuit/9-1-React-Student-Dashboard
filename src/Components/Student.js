import { useState } from "react";
import StudentInfo from "./StudentInfo";
import CommentsForm from "./CommentsForm";
import Comments from "./Comments";
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
            <div className="commentsContainer">
              <h4>1-on-1 Notes</h4>
              <CommentsForm />
              <br></br>
              <hr></hr>
              <h4>Comments</h4>
              <Comments student={student} />
            </div>
          </section>
        </>
      )}
    </li>
  );
}
