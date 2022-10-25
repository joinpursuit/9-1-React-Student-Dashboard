import Student from "./Student";

function Students({ students, cohortName }) {
  return (
    <div className="Students">
      <h2>{cohortName}</h2>
      <p>
        Total Students: <span>{students.length}</span>
      </p>
      <section>
        {students.map(({ id, profilePhoto, names, username, dob }) => {
          return (
            <Student
              key={id}
              photo={profilePhoto}
              names={names}
              username={username}
              dob={dob}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Students;
