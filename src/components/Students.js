import { useState } from "react";
import Student from "./Student";

function Students({ students, cohortName, setStudents, studentData }) {
  const [search, setSearch] = useState("");

  return (
    <div className="Students">
      <h2>{cohortName}</h2>
      <p>
        {search ? "Search Results: " : "Total Students: "}
        <span>{students.length}</span>
      </p>
      <input
        type="text"
        name="search"
        placeholder="Search by Name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setStudents(
            studentData.filter((el) => {
              const keywords = e.target.value.toLowerCase().split(" ");
              let checkArr = [];
              if (
                el.cohort.cohortCode === cohortName.replace(" ", "") ||
                cohortName === "All Students"
              ) {
                checkArr = keywords.map(
                  (element) =>
                    el.names.preferredName.toLowerCase().includes(element) ||
                    el.names.surname.toLowerCase().includes(element)
                );
                return checkArr.includes(false) ? false : true;
              }
            })
          );
        }}
      />
      <br></br>
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
            cohort,
            notes,
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
