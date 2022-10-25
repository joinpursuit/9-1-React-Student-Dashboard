import "./Student.css";

export default function Student({ person, date, data }) {
  let bday = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(date);

  //   let trackCheck;
  function onTrack(person) {
    // Object.values(person.certifications).every((value) => {
    //   if (value === true) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    if (
      person.certifications.resume &&
      person.certifications.linkedin &&
      person.certifications.github &&
      person.certifications.mockInterview
    ) {
      return true;
    } else {
      return false;
    }
    // console.log(person);
  }

  //   console.log(trackCheck);
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
        {onTrack(person) ? (
          <p className="onTrack">On Track to Graduate</p>
        ) : null}
      </div>
    </article>
  );
}
