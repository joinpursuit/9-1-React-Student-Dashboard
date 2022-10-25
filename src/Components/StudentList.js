import Student from "./Student";
import "./studentList.css";
import { useState } from "react";
export default function StudentList({
  totalOption,
  studentListOPtion,
  titleOption,
record,
  clickShowMore,
}) {
  const [showMore, setShowMore] = useState(false);
  const [onTrack, setOnTrack] = useState("On Track to Graduate");
 
  return (
    <div className="StudentList">
      <h2>{titleOption}</h2>
      <p>
        Total Students: <span>{totalOption}</span>
      </p>
      {/* //!function with condition to update the state of student count in total */}
      <div className="List">
        {studentListOPtion.map((record) => {
          //! DOB Format
          const dateFormat = new Date(record.dob);
          // console.log(record.certifications.resume)
          const handleOnTrack = () => {
            if (
              record.certifications.resume &&
              record.certifications.linkedin &&
              record.certifications.github &&
              record.certifications.mockInterview &&
              record.codewars.current.totla > 600
            ) {
              setOnTrack(true);
              // setOnTrack(onTrack);
            } else {
              setOnTrack(false);
            }
          };

          return (
            <article className="UserInfo" key={record.id}>
              <div className="Cards" key={record.id}>
                <img src={record.profilePhoto} alt={record.names} />{" "}
                <span className="Ontrack">
                  <p>FIX ON TRACK TO GRADUATE</p>{" "}
                </span>
                {/* <h5> */}
                <p>
                  <b>
                    {" "}
                    {record.names.preferredName}{" "}
                    {record.names.middleName.charAt(0)}. {record.names.surname}{" "}
                  </b>
                  <br /> {/* </h5> */}
                  {record.username} <br /> Birthday:{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                  }).format(dateFormat)}
                </p>
                <br />
                {/* onClick event to link */}
                <div className="ShowMoreBtn">
                  <button onClick={() => setShowMore(!showMore)}>
                    {" "}
                    {!showMore ? "Show More..." : "Show Less..."}
                  </button>
                  {showMore ? (
                    <div className="ShowMOre">
                      <section className="Student-Information">
                        <section className="Codewars">
                          <article>
                            <h3>Codewars</h3>
                            <p>
                              {" "}
                              Current Total:
                              <span>{record.codewars.current.total}</span>
                            </p>
                            <p>
                              {" "}
                              Last Week:
                              <span> {record.codewars.current.lastWeek}</span>
                            </p>
                            <p>
                              {" "}
                              Goal:
                              <span> {record.codewars.goal.total}</span>
                            </p>
                            <p>
                              {" "}
                              Percent of Goal Achieved:
                              <span>
                                FIX THIS MATH
                                {/*{(record.codewars.current.total /
                                  record.codewars.goals.total) *
                                  100} */}
                              </span>
                            </p>
                          </article>{" "}
                        </section>
                        <section className="Scores">
                          <article>
                            <h3>Scores</h3>
                            <p>
                              {" "}
                              Assignments:{" "}
                              <span>{(record.cohort.scores.assignments)*100}%</span>
                            </p>
                            <p>
                              Projects: <span>{(record.cohort.scores.projects)*100}%</span>
                            </p>
                            <p>
                              Assessments: <span>{(record.cohort.scores.assessments)*100}%</span>
                            </p>
                          </article>
                        </section>

                        <section className="certifications">
                          <article>
                            <h3>Certifications</h3>
                            <p>
                              {" "}
                              Resume: <span>{record.certifications.resume ? "✅" : "❌"}</span>
                            </p>
                            <p>
                              LinkedIn: <span>{record.certifications.linkedin ? "✅" : "❌"}</span>
                            </p>
                            <p>
                              GitHub: <span>{record.certifications.github? "✅" : "❌"}</span>
                            </p>
                          </article>
                        </section>
                      </section>
                    </div>
                  ) : null}
                </div>
              </div>
              {/* <p></p> */}
            </article>
          );
          //PASS student Component
        })}
      </div>
       <br />
       <br />
       {/* <Student handleShowMoreBtn={handleShowMoreBtn}></Student> */}
   </div>
  );
}
