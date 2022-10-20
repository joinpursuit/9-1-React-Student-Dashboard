import Student from "./Student";

function Students({ students, setStudents }) {
  return (
    <div className="Students">
      <h2>All Students</h2>
      <p>
        Total Students: <span>{students.length}</span>
      </p>
      <section>
        {students.map(({id, profilePhoto, names}) => {
          return <Student key={id} photo={profilePhoto} names={names}/>;
        })}
      </section>
    </div>
  );
}

export default Students;
