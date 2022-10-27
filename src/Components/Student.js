import { useState } from "react";

// Secondary Components
import StudentInfo from "./StudentInfo";
import CommentsForm from "./CommentsForm";
import Stats from "./Stats";

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
            <hr></hr>
            <div className="commentsContainer">
              <h4>1-on-1 Notes</h4>
              <CommentsForm student={student} addComment={addComment} />
              <br></br>
              <hr></hr>
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
            </div>
          </section>
        </>
      )}
    </li>
  );
}
