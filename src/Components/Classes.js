
import "./Classes.css"

const Classes = ({handleCohort, cohort, student, handleStudents, }) => {

    student.forEach((students) => {
        let cohorts = students.cohort.cohortCode.replace(/\d+/g, '') + " " + students.cohort.cohortCode.replace(/\D/g,'')
        if(!cohort.includes(cohorts)){
            handleCohort(cohorts)
        }
      })

    function filterStudents(sc){
         const filter = student.filter((s) => s.cohort.cohortCode.replace(/\d+/g, '') + " " + s.cohort.cohortCode.replace(/\D/g,'') === sc);
          handleStudents(filter)
    }

let sort = cohort.sort(new Intl.Collator().localeCompare)





    return(
<section className="choose-class">
    <h2>Choose a Class by Start Date</h2>
<section className="list">
    <ul className="class-list">
        <li className="cohort-dates"><button  onClick={() => {handleStudents(student); }}className="class-name">All Students</button></li>
       {sort.map((classes) => {
           return (
          <li key={classes}className="cohort-dates"><button onClick={() => {filterStudents(classes)}}className="class-name">{classes}</button></li>
        )
       })}
    </ul>
</section>
</section>
    )
}

export default Classes