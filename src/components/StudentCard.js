import Students from './Students'
import "./StudentCard.css"

export default function StudentCard ({student, cohorts}){
    return(
        <ul className='card'>
            <h2>{cohorts}</h2>
            <p>Total Students: {student.length}</p>
            {student.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort}) => {
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