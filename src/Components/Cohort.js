export default function Cohort({
  Records,
  setStudentListOption,
  setTitleOption,
  titleOption,
  setTotalOption,
}) {
  //? function for new title when clicking all student from cohort list, resets list to full list
  const handleTitleClick = () => {
    setStudentListOption(Records);
    setTitleOption("All Students");
    setTotalOption(Records.length);
  };
  //?---------------
  //* Filter cohort list for those matching optionb --------
  let filterCohort = Records.filter((el) => {
    return el.cohort.cohortCode === titleOption.split(" ").join("");
  });
  // console.log(filterCohort); // lists student in each cohort
  //*---------------

  //!-------------------- USED NEW SET to remove duplicates
  let newCohortList = [
    ...new Set(Records.map((record) => record.cohort.cohortCode)),
  ];
  console.log(newCohortList);
  //!Sorting cohorts list
  let sortList = newCohortList.sort((a, b) => {
    var aa = a.split(" "),
      bb = b.split(" ");
    return aa[1] - bb[1] || newCohortList[aa[0]] - newCohortList[bb[0]];
  });
  // console.log(sortList);

  //!-------------------------------
  return (
    <div className="CohortList">
      <h2>Choose a Class by Start Date</h2>
      {
        <ul
          key={Records.id}
          style={{ textDecoration: "underline", border: "1px dashed red" }}
        >
          <li onClick={() => handleTitleClick()}>
            <button value="All Students">All Students</button>
          </li>
          {newCohortList.map((record) => {
            return (
              <div className="Cohort" key={record.id}>
                {
                  <li
                    onClick={() => {
                      setStudentListOption(filterCohort);
                      setTotalOption(filterCohort.length);
                      //! Separating the dates using Slice by targeting years, years contain 4
                      setTitleOption(
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
