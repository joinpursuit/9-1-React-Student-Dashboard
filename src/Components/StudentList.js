export default function StudentList({ Records, totalOption, setTotalOption }) {
  return (
    <div className="StudentList">
      <h3>All Students</h3>
      <p>Total Students: {Records.length} </p>
      {/* //!function with conditiont to update the state of student count in total */}
      {/* {console.log(Records.length)} */}
      <div className="List">
        {Records.map((record) => {
          //! DOB Format
          const dateFormat = new Date(record.dob);
          // console.log(dateFormat);

          return (
            <div className="UserInfo">
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

              <p></p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
}
