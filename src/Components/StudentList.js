export default function StudentList({ Records }) {
  return (
    <div className="StudentList">
      <h3>All Students</h3>
      <p>Total Students:{}</p>
      <div className="List">
        {Records.map((record) => {
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
                  {record.username} <br /> Birthday:{record.dob}
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
