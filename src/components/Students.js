import { useState } from "react";
import Student from "./Student";

function Students({ students, cohortName, setStudents, studentData }) {
  const [search, setSearch] = useState("");

  return (
    <div className="Students">
      <h2>{cohortName}</h2>
      <p>
        Total Students: <span>{students.length}</span>
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
              // return (el.cohort.cohortCode === cohortName.replace(" 20", "20") ||
              //   cohortName === "All Students") &&
              //   (el.names.preferredName
              //     .toLowerCase()
              //     .includes(e.target.value.toLowerCase().trim()) ||
              //     el.names.surname
              //       .toLowerCase()
              //       .includes(e.target.value.toLowerCase().trim()));
              const keyWords = e.target.value.toLowerCase().split(" ");
              console.log(keyWords);
              let checkArr = [];
              if (
                el.cohort.cohortCode === cohortName.replace(" 20", "20") ||
                cohortName === "All Students"
              ) {
                checkArr = [];
                checkArr = keyWords.map((element) => {
                  return el.names.preferredName
                    .toLowerCase()
                    .includes(element) ||
                    el.names.surname.toLowerCase().includes(element)
                    ? true
                    : false;
                });
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
