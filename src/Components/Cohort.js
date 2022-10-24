export default function Cohort({
  Records,
  cohortOption,
  setCohortOPtion,
  setStudentListOption,
  setTitleOption,
  cohort,
}) {
  //? function for new title when clicking all student from cohort list, resets list to full list
  const handleTitleClick = () => {
    setStudentListOption(Records);
    setTitleOption("All Students");
    console.log("CLICKED to reset the student list to main page");
  };
  //?---------------
  //* Filter cohort list for those matching option
  const filterCohort = (cohort) => {
    setStudentListOption(
      Records.filter((el) => {
        return el.cohort.cohortCode === cohort;
      })
    );
    console.log("CLicked Date");
  };
  //*---------------
  //!-------------------- trying to remove duplicates
  //Remove duplicate usiong new Set
  // let newCohortList = [
  //   ...new Set(Records.map((record) => record.cohort.cohortCode)),
  // ];
  // console.log(newCohortList.sort())
  // let num = [];
  // let word = [];
  // newCohortList.forEach((el) => {
  //* check if a number
  //   if (el > -1) {
  //     num.push(el);
  //   } else {
  //     word.push(el);
  //   }
  // });
  // console.log(word);
  //!-------------------------------
  return (
    <div className="CohortList">
      <h2>Choose a Class by Start Date</h2>
      {
        <ul style={{ textDecoration: "underline", border: "1px dashed red" }}>
          <li onClick={handleTitleClick}>
            <button onClick={handleTitleClick}>All Students</button>
          </li>

          <li>
            <button
            //  onClick={filterCohort(cohort)}
            >
              Winter 2026
            </button>
          </li>
          <li>
            <button>Fall 2026</button>
          </li>
          <li>
            <button>Summer 2026</button>
          </li>
          <li>
            <button>Spring 2026</button>
          </li>
          <li>
            <button>Winter 2025</button>{" "}
          </li>
          <li>
            <button>Fall 2025</button>
          </li>
          <li>
            <button>Summer 2025</button>
          </li>
          <li>
            <button>Spring 2025</button>
          </li>
        </ul>
      }
      {
        // Records.map((record) => {
        //   return (
        //     <div className="Cohort" key={record.id}>
        // <ul>{newCohortList}</ul>
        //     </div>
        //   );
        // })
      }
    </div>
  );
}
