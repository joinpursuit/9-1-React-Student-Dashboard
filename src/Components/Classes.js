export default function Classes ({ students }) {

  let cohorts = []

  //Identify all cohorts by unique start date and sort in descending order
  students.map((student) => {
    let cohortDate = student.cohort.cohortStartDate
    let cohortCode = student.cohort.cohortCode

    if (!cohorts.includes(cohortDate)){
      cohorts.push(cohortDate)
    }
    cohorts.sort((a, b)=> {
      a = a.split('/')
      b = b.split('/')
      return b[2] - a[2] || b[1] - a[1] || b[0] - [0];
    })
  })


  console.log(cohorts)

  // cohorts.forEach((cohort) => {
  //   students.map((student) => {
  //     if (student.cohort.cohortStartDate === cohort){
  //       cohort = student.cohort.cohortCode
  //     }
  //   })
  // })

  // for (let i=0; i < cohorts.length; i++){
  //   students.map((student) => {
  //     if (student.cohort.cohortDate === cohorts[i]){
  //       cohorts[i] = student.cohort.cohortCode
  //     }
  //   })
  // }

  // cohorts.map((cohort) => {
  //   students.map((student) => {
  //     let index = student.indexOf(student.cohort.cohortStartDate === cohort)
  //   })
  //   cohort = students[index].cohort,cohortCode
  //   console.log(cohort)
  // })
 

    return (
        <aside>
          <h2>Classes by start date</h2>
          <p>All Students</p>
          {
            cohorts.map((cohort) => {
              return (
                <p>{cohort}</p>
              )
            })
            // sortedCohorts.map((cohort)=> {
              // return (
              // // <p>{cohort.replaceAll("20", " 20")}</p>
              // )
            // })
          }
        </aside>
    )
}

