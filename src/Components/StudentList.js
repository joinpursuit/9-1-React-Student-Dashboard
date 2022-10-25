import Student from "./Student";
import "./studentList.css";
import { useState } from "react";
export default function StudentList({
  totalOption,
  studentListOPtion,
  titleOption,

  clickShowMore,
})
{
  const [showMore, setShowMore] = useState(false);

  // console.log(certifications.resume)
  // //!------ on track
  // if (
  //   certifications.resume &&
  //   certifications.linkedin &&
  //   certifications.github &&
  //   certifications.mockInterview
  // ) {
  //   console.log("yes");
  //   return <div className="ONtrack"></div>;
  // }
  //!------
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
          return (
            <article className="UserInfo" key={record.id}>
              <div className="Cards" key={record.id}>
                <img src={record.profilePhoto} alt={record.names} />{" "}
                <span className="Ontrack">
                  <p>on track here</p>{" "}
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
                <button onClick={()=> setShowMore(!showMore)}>
                  {" "}
                  {!showMore ? "Show More..." : "Show Less..."}
                </button>
                
                <Student />
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
