import Students from './StudentCards'
import "./Students.css"
export default function StudentCard ({student, cohorts}){
  const filteredStudents = student.filter(({cohort}) => {
    return cohort.cohortCode === cohorts
  })

    return(
        <ul className='card'>
            <h2>{cohorts}</h2>
            <p>Total Students: 
              <div>{cohorts === 'All Students' ? student.length: filteredStudents.length}</div>
              </p>
            {cohorts === 'All Students' ? student.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort}) => {
        return (
          <div key={id}>
            <Students
              names={names}
              profilePhoto={profilePhoto}
              username={username}
              dob={dob}
              certifications={certifications}
              codewars={codewars}
              cohort={cohort}
            />
          </div>
        );
      }) : filteredStudents.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort}) => {
        return (
          <div key={id}>
            <Students
              names={names}
              profilePhoto={profilePhoto}
              username={username}
              dob={dob}
              certifications={certifications}
              codewars={codewars}
              cohort={cohort}
            />
          </div>
        );
      })}
        </ul>
    )
}