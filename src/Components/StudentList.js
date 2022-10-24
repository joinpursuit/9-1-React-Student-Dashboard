import "./studentList.css";

export default function StudentList({
  Records,
  totalOption,
  setTotalOption,
  studentListOPtion,
  titleOption,
}) {
  return (
    <div className="StudentList">
      <h2>{titleOption}</h2>
      <p>
        Total Students: <span>{totalOption}</span>
      </p>
      {/* //!function with condition to update the state of student count in total */}
      <div className="List">
        {Records.map((record) => {
          // console.log(record.notes);
          //! DOB Format
          const dateFormat = new Date(record.dob);

          return (
            <article className="UserInfo" key={record.id}>
              <div className="Cards" key={record.id}>
                <img src={record.profilePhoto} alt={record.names} />
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
                <a style={{ color: "green" }} href="http://">
                  Show More...
                </a>
              </div>

              {/* <p></p> */}
            </article>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
}
