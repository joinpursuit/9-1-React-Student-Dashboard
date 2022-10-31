import React from 'react';
import Notes from './Notes';


export function StudentInfo({student}) {

const percentAchieved = ((Number(student.codewars.current.total)/ Number(student.codewars.goal.total)) * 100).toFixed(2)
// {student.codewars.current.goal.total}
    //Number{student.codewars.current.total}/Number{student.codewars.current.total }* 100.Fixed(2)

    function getResumeValue(){
    let resumeValue
    // student.resume ? resumeValue = student.resume : resumeValue = "X"
    if(student.resume === false){
        resumeValue = "X";
        resumeValue.style ="red";
    } else {
        resumeValue = student.resume
    }
    return resumeValue
}





  return (
    <div className='studentInfoContainer'>
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
                <li>Resume: {(student.resume === true) ? <span>True</span> : <span className="x" >X </span> }</li>
                <li>LinkedIn: {(student.linkedin === true) ? <span>True</span> : <span className="x" >X </span> }</li>
                <li>Mock Interview: {(student.github === true) ? <span>True</span> : <span className="x" >X </span> }</li>
                
            </ul>

            <ul className='notes'>
                <h4> 1-on-1 Notes</h4>
                    <form className='note'>
                        <label className="oneCommenter" htmlFor="commenter">Commenter Name:    
                                <input  
                                        name="name"
                                        type="text" 
                                        id= "commenter" 
                                        // onChange=""
                                        // value=""
                                 />
                        </label>
                < br/>< br/>
                        <label className="oneComment" htmlFor="comment">Comment:    
                                <input  
                                        name="comment"
                                        type="text" 
                                        id= "comment"
                                        // onChange=""
                                        // value=""
                                 />
                        </label> < br/>< br/>
                        <input className="addNoteButton" type="submit" value="Add Note"/>  
                     </form> 
                     < br/>
                     {(student.notes.length > 0) 
                     ?
                     <li>  {student.notes[0].commenter } says "{student.notes[0].comment}"</li>
                     :  null 
                     }

            </ul>
           

            {/* */}

            
</div>
  );
};




