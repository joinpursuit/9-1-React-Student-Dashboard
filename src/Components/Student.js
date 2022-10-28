import ShowBtn from "./ShowBtn";
export default function Student({ record, dateFormat, setShowMore, showMore, index }) {
  const handleOnTrack = (record) => {
    if (
      record.certifications.resume &&
      record.certifications.linkedin &&
      record.certifications.github &&
      record.certifications.mockInterview &&
      record.codewars.current.total > 600
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <article
      onClick={() => setShowMore(!showMore)}
      className="Card"
      key={index}
    >
      <div className="Front">
        <img src={record.profilePhoto} alt={record.names.preferredName} />{" "}
        <p>
          <b>
            {" "}
            {record.names.preferredName} {record.names.middleName.charAt(0)}.{" "}
            {record.names.surname}{" "}
          </b>
          <span className="Ontrack">
            {handleOnTrack(record) ? (
              <p style={{ color: "green" }}>On Track to Graduate</p>
            ) : <p style={{color: "orange"}}>Not On Track</p> 
            // null
            }{" "}
          </span>
          <br />
          {record.username} <br /> Birthday:{" "}
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "long",
          }).format(dateFormat)}
        </p>
      </div>
      <br />
          <ShowBtn record={record} />
    </article>
  );
}
