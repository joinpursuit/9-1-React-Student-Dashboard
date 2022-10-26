export default function Classes ({ students, handleClick, showAll }) {

  let cohorts = []
  let cohortCodes = []
  let cohortInfo ={}

  //Identify all cohorts by unique start date and sort in descending order
  students.map((student) => {
    let cohortDate = student.cohort.cohortStartDate
    let cohortCode = student.cohort.cohortCode

    if (!cohorts.includes(cohortDate)){
      cohortInfo[cohortDate] = cohortCode
      cohorts.push(cohortDate)
    }
  })

  //Sorting cohorts by date in descending order
  cohorts.sort((a, b)=> {
    a = a.split('/')
    b = b.split('/')
    return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
  })

  //Using new cohortCodes array to store unique cohort codes in descending order
  for (let i=0; i < cohorts.length; i++){
    if (!cohortCodes.includes(cohortInfo[cohorts[i]])){
      cohortCodes.push(cohortInfo[cohorts[i]])
    } 
  }

    return (
        <aside className="classes">
          <h2>Classes by start date</h2>
          <button value="allStudents" onClick={showAll}>All Students</button>
          {
          //Converting cohort codes to 'human-readable' text and storing original cohortCode as value
            cohortCodes.map((cohort) => {
              return (
                <button value={cohort} onClick={() => {handleClick(cohort)}}>
                  {cohort.replaceAll('20', ' 20')}
                </button>
              )
            })
          }
        </aside>
    )
}

