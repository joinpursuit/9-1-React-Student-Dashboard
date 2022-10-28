// import { useState } from "react";
import Student from "./Student";

function Students({
  students,
  cohortName,
  setStudents,
  studentData,
  search,
  setSearch,
}) {
  // const [boxVal, setBoxVal] = useState(false);
  return (
    <div className="Students">
      <h2>{cohortName}</h2>
      <p>
        {search ? "Search Results: " : "Total Students: "}
        <span>{students.length}</span>
        {/* <label>
          Students on track to graduate{" "}
          <input
            id="checkbox"
            type="checkbox"
            name="on-track"
            checked={boxVal}
            onChange={() => setBoxVal(!boxVal)}
          />
        </label> */}
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
              if (
                el.cohort.cohortCode === cohortName.replace(" ", "") ||
                cohortName === "All Students"
              ) {
                const checkArr = keywords.map(
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
