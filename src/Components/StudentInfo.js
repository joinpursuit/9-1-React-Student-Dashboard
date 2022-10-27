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

  function formatDob(date) {
    let newDate = new Date(date);
    const newDateArray = newDate.toDateString().split(" ");
    return `${newDateArray[1]} ${newDateArray[2]}, ${newDateArray[3]}`;
  }

  return (
    <div className="profile">
      <img
        className="profilePhoto"
        src={student.profilePhoto}
        alt="profile"
        width="50px"
      />
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
          <a href={`mailto: ${student.username}`} target="blank">
            {student.username}
          </a>
        </p>
        <p>Birthday: {formatDob(student.dob)}</p>
      </div>
      {onTrackToGrad && <p style={{ color: "green" }}>On Track to Graduate</p>}
    </div>
  );
}
