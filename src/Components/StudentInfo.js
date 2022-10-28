import "./StudentInfo.css";

export default function StudentInfo({ student }) {
  const { certifications } = student;
  const { resume, linkedin, mockInterview, github } = certifications;
  const onTrackToGrad =
    resume &&
    linkedin &&
    mockInterview &&
    github &&
    student.codewars.current.total > 600;

  /**
   * Takes in a date as a string and uses the Date constructor to create a new date object to get the necessary date elements in a human readable format
   * @param {str} date
   * @returns {str} formatted date
   */
  function formatDob(date) {
    let dateObj = new Date(date);
    const dateArray = dateObj.toDateString().split(" ");
    const month = dateObj.toLocaleString("default", { month: "long" });
    // We use .toLocaleString to get the long month name from the created date object
    // https://stackoverflow.com/questions/1643320/get-month-name-from-date/18648314#18648314
    return `${month} ${dateArray[2]}, ${dateArray[3]}`;
  }

  return (
    <div className="profile">
      <div className="imageContainer">
        <img
          className="profilePhoto"
          src={student.profilePhoto}
          alt="profile"
          width="100px"
        />
        {onTrackToGrad && <p className="onTrackToGrad">On Track to Graduate</p>}
      </div>
      <div>
        <p>
          Name:{" "}
          <span id="fullName">
            {student.names.preferredName} {student.names.middleName.slice(0, 1)}
            . {student.names.surname}
          </span>
        </p>

        <p>
          User Name:{" "}
          <a id="email" href={`mailto: ${student.username}`} target="blank">
            {student.username}
          </a>
        </p>
        <p>Birthday: {formatDob(student.dob)}</p>
      </div>
    </div>
  );
}
