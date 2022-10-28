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
  //* Filter cohort list for students with those matching options --------
  let filterCohort = Records.filter((el) => {
    return el.cohort.cohortCode === titleOption.split(" ").join("");
  });
  
    //!-------------------- USED NEW SET to remove duplicates
  let newCohortList = [
    ...new Set(Records.map((record) => record.cohort.cohortCode)),
  ];

  //!Sorting cohorts list
  // let sortList = newCohortList.sort((a, b) => {
  //   var aa = a.split(" "),
  //     bb = b.split(" ");
  //   return aa[1] - bb[1] || newCohortList[aa[0]] - newCohortList[bb[0]];
  // });
  // console.log(sortList);

  return (
    <div className="CohortList" key={Records.id}>
      {
        <div key={Records.id}>
          <h4>Choose a Class by Start Date:</h4>
          <p onClick={() => handleTitleClick()}>
            <button className="All" value="All Students">
              All Students
            </button>
          </p>
          <span>
            {newCohortList.map((record, index) => {
              return (
                <ul className="Cohort" key={index}>
                  {
                    <li
                    onClick={() => {
                      setStudentListOption(filterCohort);
                      setTotalOption(filterCohort.length);
                      
                      setTitleOption(
                        record.slice(0, -4) + " " + record.slice(-4)
                        );
                      }
                    }
                    >
                
                      <button>
                        {record.slice(0, -4) + " " + record.slice(-4)}
                      </button>
                    </li>
                  }
                </ul>
              );
            })}
          </span>
        </div>
      }
    </div>
  );
}
