import { useState } from "react";
import StudentList from "./StudentList";
import Cohort from "./Cohort";

export default function Student({
  Records,
  codewars,
  certifications,
  totalOption,
  studentListOPtion,
  setTotalOption,
  titleOption,
}) {
  const [showMore, setShowMore] = useState(false);

  // console.log(Records.certifications.resume)
  //! SHOWMORE
  const handleShowMore = () => {
    setShowMore(!showMore);
    // console.log("HI")
  };
  const clickShowMore = () => {
    // setShowMore(!showMore);
    if (showMore === false) {
      return (
        <div className="ShowMOre">
          <section className="Student-Information">
            <section className="Codewars">
              <article>
                <h3>Codewars</h3>
                <p>
                  {" "}
                  Current Total:
                  <span>{}</span>
                </p>
                <p>
                  {" "}
                  Last Week:
                  <span>{}</span>
                </p>
                <p>
                  {" "}
                  Goal:
                  <span>{}</span>
                </p>
                <p>
                  {" "}
                  Percent of Goal Achieved:
                  <span>{}</span>
                </p>
              </article>{" "}
            </section>
            <section className="Scores">
              <article>
                <h3>Scores</h3>
                <p>
                  {" "}
                  Assignments: <span>{}</span>
                </p>
                <p>
                  Projects: <span>{}</span>
                </p>
                <p>
                  Assessments: <span>{}</span>
                </p>
              </article>
            </section>

            <section className="certifications">
              <article>
                <h3>Certifications</h3>
                <p>
                  {" "}
                  Resume: <span>{}</span>
                </p>
                <p>
                  LinkedIn: <span>{}</span>
                </p>
                <p>
                  GitHub: <span>{}</span>
                </p>
              </article>
            </section>
          </section>
        </div>
      );
    }
  };
  // return (
  //   <div className="StudentList">
  //     <h2>{titleOption}</h2>
  //     <p>
  //       Total Students: <span>{totalOption}</span>
  //     </p>
  //     {/* //!function with condition to update the state of student count in total */}
  //     <div className="List">
  //       {studentListOPtion.map((record) => {
  //         //! DOB Format
  //         const dateFormat = new Date(record.dob);
  //         return (
  //           <article className="UserInfo" key={record.id}>
  //             <div className="Cards" key={record.id}>
  //               <img src={record.profilePhoto} alt={record.names} />{" "}
  //               <span className="Ontrack">
  //                 <p>on track here</p>{" "}
  //               </span>
  //               {/* <h5> */}
  //               <p>
  //                 <b>
  //                   {" "}
  //                   {record.names.preferredName}{" "}
  //                   {record.names.middleName.charAt(0)}. {record.names.surname}{" "}
  //                 </b>
  //                 <br /> {/* </h5> */}
  //                 {record.username} <br /> Birthday:{" "}
  //                 {new Intl.DateTimeFormat("en-US", {
  //                   dateStyle: "long",
  //                 }).format(dateFormat)}
  //               </p>
  //               <br />
  //               {/* onClick event to link */}
  //               <button onClick={ ()=>setShowMore(!showMore)}> {!showMore ? "Show More..." : "Show Less..."}</button>

  //             </div>

  //           </article>
  //         );
  //         //PASS student Component
  //       })}
  //     </div>
  //     <br />
  //     <br />
  //   </div>
  // );
}
