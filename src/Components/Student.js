import ShowMore from "./ShowMore";
import "./Student.css";

export default function Student({ person, date, data }) {
  let bday = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(date);

  function onTrack(person) {
    if (
      person.certifications.resume &&
      person.certifications.linkedin &&
      person.certifications.github &&
      person.certifications.mockInterview &&
      person.codewars.current.total >= 600
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <article className="card">
      <img src={person.profilePhoto} alt={person.names.preferredName}></img>
      <div className="studentInfo">
        <aside>
          <h3>
            {person.names.preferredName} {person.names.middleName.charAt(0)}{" "}
            {person.names.surname}
          </h3>
          <p>{person.username}</p>
          <p>
            <span>Birthday:</span> {bday}
          </p>
        </aside>
        {onTrack(person) ? (
          <p className="onTrack">
            <em>On Track to Graduate</em>
          </p>
        ) : null}
        {/* <button className="toggle-details">Show more...</button> */}
        <ShowMore person={person} />
      </div>
    </article>
  );
}
