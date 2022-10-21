
import "./Classes.css"

const Classes = ({handleCohort, cohort, student}) => {

    student.forEach((students) => {
        let cohorts = students.cohort.cohortCode.replace(/\d+/g, '') + " " + students.cohort.cohortCode.replace(/\D/g,'')
        if(!cohort.includes(cohorts)){
            handleCohort(cohorts)
        }
      })

    return(
<section className="choose-class">
    <h2>Choose a Class by Start Date</h2>
<section className="list">
    <ul className="class-list">
        <li className="cohort-dates"><button className="class-name">All the Students</button></li>
       {cohort.map((classes) => {
        return (
          <li key={classes}className="cohort-dates"><button className="class-name">{classes}</button></li>
        )
       })}
    </ul>
</section>
</section>
    )
}

export default Classes