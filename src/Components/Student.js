import "./Student.css";

export default function Student({ person, date, data }) {
  let bday = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(date);
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
        <button className="toggle-details">Show more...</button>
        <p className="onTrack"></p>
      </div>
    </article>
  );
}
