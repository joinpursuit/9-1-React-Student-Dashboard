import { useState } from "react";

import StudentInfo from "./StudentInfo";
import CommentsForm from "./CommentsForm";
import Stats from "./Stats";

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
          <hr></hr>
          <section className="showMoreSection">
            <Stats student={student} />
            <CommentsForm student={student} addComment={addComment} />
            <h4>Comments</h4>
            <ul className="comments">
              {comments.map((comment, idx) => {
                return (
                  <li key={idx}>
                    {comment.commenter} says, "{comment.comment}"
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </li>
  );
}
