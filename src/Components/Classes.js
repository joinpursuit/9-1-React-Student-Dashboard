export default function Classes ({ allStudents, handleClick, showAll }) {

  //Declare variables to store cohort start date and cohort codes
  let cohorts = []
  let cohortCodes = []
  let cohortInfo ={}

  //Identify all cohorts by unique start date and sort in descending order
  allStudents.map((student) => {
    let cohortDate = student.cohort.cohortStartDate
    let cohortCode = student.cohort.cohortCode

    if (!cohorts.includes(cohortDate)){
      cohorts.push(cohortDate)
      return cohortInfo[cohortDate] = cohortCode
    }
  })

  //Sorting cohorts by date in descending order
  cohorts.sort((a, b)=> {
    a = a.split('/')
    b = b.split('/')
    return b[2] - a[2] || b[0] - a[0] || b[1] - a[1];
  })

  //Using new cohortCodes array to store unique cohort codes in descending order based on sorted cohort array
  for (let i=0; i < cohorts.length; i++){
    if (!cohortCodes.includes(cohortInfo[cohorts[i]])){
      cohortCodes.push(cohortInfo[cohorts[i]])
    } 
  }

  //React component
    return (
        <aside className="classes" id="classes">
          <h2>Classes by start date</h2>
          <ul>
            <li value="allStudents" className="allStudents" onClick={showAll}>All Students</li>
            <hr></hr>
            {
            //Converting cohort codes to 'human-readable' text and storing original cohortCode as value for each button
              cohortCodes.map((cohort, i) => {
                return (
                  <>
                  <li value={cohort} key={i} onClick={() => {handleClick(cohort)}}>
                    {cohort.replaceAll('20', ' 20')}
                  </li>
                  <hr/>
                  </>
                )
              })
            }
          </ul>
        </aside>
    )
}

