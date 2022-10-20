export default function StudentList({ Records }) {
  return (
    <div className="StudentList">
      {/* <h3>All Students</h3>
      <p>Total Students:{}</p> */}
      <div className="List">
        cards with students
        {Records.map((record) => {
          return (
            <div className="Cards" key={record.id}>
              <img src={record.profilePhoto} alt={record.names} />
              <div className="UserInfo">
                <h5>
                  {record.names.preferredName}{" "}
                  {record.names.middleName.charAt(0)}. {record.names.surname}
                </h5>
                <p>
                  {record.username} <br /> Birthday:
                  {record.dob}
                </p>
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
