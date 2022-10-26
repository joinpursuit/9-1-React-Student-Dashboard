import ShowBtn from "./ShowBtn";
import Form from "./Form";
import { useState } from "react";
//
export default function Student({ record, dateFormat }) {
  const [onTrack, setOnTrack] = useState("");
  const handleOnTrack = (record) => {
    if (
      record.certifications.resume &&
      record.certifications.linkedin &&
      record.certifications.github &&
      record.certifications.mockInterview &&
      record.codewars.current.total > 600
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
          {onTrack ? <p>On Track to Graduate</p> : null}{" "}
        </span>
        <p>
          <b>
            {" "}
            {record.names.preferredName} {record.names.middleName.charAt(0)}.{" "}
            {record.names.surname}{" "}
          </b>
          <br />
          {record.username} <br /> Birthday:{" "}
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "long",
          }).format(dateFormat)}
        </p>
        <br />
        {/* showbtn */}
        <ShowBtn record={record} />
      </div>
    </article>
  );
  //PASS student Component
}
