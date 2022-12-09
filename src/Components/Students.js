import StudentCards from './StudentCards';

import "../css/Students.css";

export default function Students ({student, cohorts}){
  const Students = student.filter(({cohort}) => {
    return cohort.cohortCode === cohorts
  })

    return(
        <ul className='card'>
            <h2>{cohorts}</h2>
            <p>Total Students: 
              <div>{cohorts === 'All Students' ? student.length: Students.length}</div>
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
      }) : Students.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort, notes}) => {
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
    )}