import { useState } from "react";

import StudentInfo from "./StudentInfo";
import CommentsForm from "./CommentsForm";
import Stats from "./Stats";
import Comments from "./Comments";

import "./Student.css";

export default function Student({ student, addComment }) {
  const comments = [...student.notes];

  const [showMore, setShowMore] = useState(false);

  return (
    <li className="student">
      <StudentInfo student={student} />
      <p className="showMoreButton" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less..." : "Show More..."}
      </p>
      {showMore && (
        <>
          <section className="showMoreSection">
            <Stats student={student} />
            <div className="commentsContainer">
              <CommentsForm student={student} addComment={addComment} />
              <Comments comments={comments} />
            </div>
          </section>
        </>
      )}
    </li>
  );
}
