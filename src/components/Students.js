import StudentCards from './StudentCards';
import "./Students.css";
export default function Students ({student, cohorts}){
 //I don't know why this is red theres an error but should not be one. 
  const filteredStudents = student.filter(({cohort}) => {
    return cohort.cohortCode === cohorts
  })

    return(
        <ul className='card'>
            <h2>{cohorts}</h2>
            <p>Total Students: 
              <div>{cohorts === 'All Students' ? student.length: filteredStudents.length}</div>
              </p>
            {cohorts === 'All Students' ? student.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort, notes}) => {
        return (
          <div key={id}>
            <StudentCards
              names={names}
              profilePhoto={profilePhoto}
              username={username}
              dob={dob}
              certifications={certifications}
              codewars={codewars}
              cohort={cohort}
              notes={notes}
            />
          </div>
        );
      }) : filteredStudents.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort, notes}) => {
        return (
          <div key={id}>
            <StudentCards
              names={names}
              profilePhoto={profilePhoto}
              username={username}
              dob={dob}
              certifications={certifications}
              codewars={codewars}
              cohort={cohort}
              notes={notes}
            />
          </div>
        );
      })}
        </ul>
    )
}