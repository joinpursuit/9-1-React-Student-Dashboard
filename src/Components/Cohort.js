export default function Cohort({
  Records,
  setStudentListOption,
  setTitleOption,
  cohort,
  studentListOPtion,
  titleOption,
  setTotalOption,
}) {
  //? function for new title when clicking all student from cohort list, resets list to full list
  const handleTitleClick = () => {
    setStudentListOption(Records);
    setTitleOption("All Students");
  };
  //?---------------

  //* Filter cohort list for those matching option
  let filterCohort = Records.filter((el) => {
    return el.cohort.cohortCode === titleOption.split(" ").join("");
  });
  // console.log(filterCohort.length);
  //*---------------
  //!-------------------- USED NEW SET to remove duplicates

  let newCohortList = [
    ...new Set(Records.map((record) => record.cohort.cohortCode)),
  ];

  //!-------------------------------
  return (
    <div className="CohortList">
      <h2>Choose a Class by Start Date</h2>
      {
        <ul
          key={Records.id}
          style={{ textDecoration: "underline", border: "1px dashed red" }}
        >
          <li onClick={handleTitleClick}>
            <button onClick={handleTitleClick}>All Students</button>
          </li>
          {newCohortList.map((record) => {
            return (
              <div className="Cohort" key={record.id}>
                {
                  <li
                    onClick={() => {
                      setTotalOption(filterCohort.length);
                      setTitleOption(
                        //! Sepearting the dates using Slice by targeting years, years contain 4 numbers
                        record.slice(0, -4) + " " + record.slice(-4)
                      );
                    }}
                  >
                    <button>
                      {record.slice(0, -4) + " " + record.slice(-4)}
                    </button>
                  </li>
                }
              </div>
            );
          })}
        </ul>
      }
    </div>
  );
}
