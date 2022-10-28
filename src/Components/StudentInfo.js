import React from 'react';



export function StudentInfo({student}) {

const percentAchieved = ((Number(student.codewars.current.total)/ Number(student.codewars.goal.total)) * 100).toFixed(2)
// {student.codewars.current.goal.total}
    //Number{student.codewars.current.total}/Number{student.codewars.current.total }* 100.Fixed(2)

  return (
    <div>
        {/* <section studentInfoContainer>      */}
            <ul className='codewars'>
                <li> <h4>Code Wars</h4></li>
                <li>Current Total: {student.codewars.current.total}</li>
                <li>Last Week: {student.codewars.current.lastWeek}</li>
                <li>Goal: TBD</li>
                <li>Percent of Goal Achieved: {percentAchieved} %</li>
            </ul>
            <ul className='scores'>
                <li><h4>Scores</h4></li>
                <li>Assignments: {student.cohort.scores.assignments}%</li>
                <li>Projects: {student.cohort.scores.projects}%</li>
                <li>Assessments: {student.cohort.scores.assessments}%</li>
                <li>Percent of Goal Achieved: {percentAchieved} %</li>
            </ul>
            <ul className='certifications'>
                <li><h4>Certifications</h4></li>
                

                <li>Resume: {student.resume} ? {student.resume} :<span className="x" >X </span></li>

                <li>LinkedIn: {student.linkedin} ? {student.linkedin} :<span className="x" >X </span></li>
                <li>Mock Interview: {student.github} ?{student.github} : <span className="x" >"X" </span></li>
                <li>GitHub: {student.github}</li>
            </ul>
            {/* </section>  */}
</div>
  );
};




