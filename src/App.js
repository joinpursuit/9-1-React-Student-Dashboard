import { useState } from "react";
import data from "./data/data.json";

import Student from "./Components/Student";
import Cohorts from "./Components/Cohorts";
import SearchBar from "./Components/SearchBar";

import "./App.css";

function App() {
  const mappedStudentsToCohortCode = [...data].map(
    (student) => student.cohort.cohortCode
  );
  const uniqueCohorts = [...new Set(mappedStudentsToCohortCode)];
  // Used Det constructor and New operator to create a new array with filtered unique cohortCodes

  const numOfStudentsDisplayed = setTimeout(
    () => setTotalStudents(document.getElementsByClassName("student").length),
    250
  ); // setTimeout used to delay the access to the number of students rendered on page for accuracy

  const [students, setStudents] = useState([...data]);
  const [cohort, setCohort] = useState(null);
  const [totalStudents, setTotalStudents] = useState(numOfStudentsDisplayed);
  const [search, setSearch] = useState("");

  /**
   * Sets a chosen cohort, from the <Cohorts /> component, to <App /> state in order to map out the corresponding students
   * @param {str} cohort chosen cohort
   */
  function chooseCohort(cohort) {
    setCohort(cohort);
  }

  /**
   * Formats the cohortCode selected to a hunman-readable string
   * @param {str} cohort
   * @returns {str}
   */
  function formatCohortName(cohort) {
    return cohort.split(20).join(" 20");
  }

  /**
   * Updates <App /> students state to include permanent comments in the source data
   * This function changes the data into an array of id's in order to facilitate finding the corresping student
   * @param {{}} commentedStudent
   * @param {{}} comment
   */
  function addComment(commentedStudent, comment) {
    const updatedStudents = [...students];
    const studentsById = updatedStudents.map((student) => student.id);
    const index = studentsById.indexOf(commentedStudent.id);
    updatedStudents[index].notes.push(comment);
    setStudents(updatedStudents);
  }

  function searchAlg(student, input) {
    const { names } = student;
    const alpha = input.toLowerCase();
    const fullName =
      `${names.preferredName} ${names.middleName} ${names.surname}`.toLowerCase();
    if (fullName.includes(alpha)) {
      return student;
    }
  }

  function saveSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="app">
      <header>
        <h1>Student Dashboard Project</h1>
      </header>
      <main className="main">
        <aside>
          <Cohorts
            formatCohortName={formatCohortName}
            uniqueCohorts={uniqueCohorts}
            chooseCohort={chooseCohort}
          />
        </aside>
        <div className="studentsMainContainer">
          <div className="studentListTitle">
            <h2 id="chosenCohort">
              {cohort ? formatCohortName(cohort) : "All Students"}
            </h2>
            <p id="totalStudentsDisplayed">Total Students: {totalStudents}</p>
          </div>
          <SearchBar search={search} saveSearch={saveSearch} />
          <div className="studentListContainer">
            {!cohort
              ? students
                  .filter((student) => searchAlg(student, search)) // SearchBar filters here
                  .map((student) => (
                    <Student
                      key={student.id}
                      student={student}
                      addComment={addComment}
                    />
                  ))
              : students
                  .filter((student) => student.cohort.cohortCode === cohort) // filter applied only when a cohort is selected
                  .map((student) => (
                    <Student
                      key={student.id}
                      student={student}
                      addComment={addComment}
                    />
                  ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
