import Student from "./Student";

function Students({ students, cohortName }) {
  return (
    <div className="Students">
      <h2>{cohortName}</h2>
      <p>
        Total Students: <span>{students.length}</span>
      </p>
      <section>
        {students.map(
          ({
            id,
            profilePhoto,
            names,
            username,
            dob,
            certifications,
            codewars,
            cohort, notes
          }) => {
            return (
              <Student
                key={id}
                photo={profilePhoto}
                names={names}
                username={username}
                dob={dob}
                certifications={certifications}
                codewars={codewars}
                cohort={cohort}
                notes={notes}
              />
            );
          }
        )}
      </section>
    </div>
  );
}

export default Students;
