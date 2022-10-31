import React, {useState} from 'react';



export function StudentInfo({student}) {

const percentAchieved = ((Number(student.codewars.current.total)/ Number(student.codewars.goal.total)) * 100).toFixed(2)
// const[commenter, setCommenter] = useState("") 
// const[comment, setComment] = useState("")   

const[newNote, setNewNote] = useState({
    commenter: "",
    comment: "",
})

    function addNote(e){
       const createNote = {
        commenter: newNote.commenter, 
        comment: newNote.comment,
       }
    }

    function handleTextChange(e){
        setNewNote({
            // ...newNote,
            [e.target.commenter]: e.target.value,
            [e.target.comment]: e.target.value,
        });
    }
    function handleSubmit(e){
        e.preventDefault()
        addNote()
        resetForm()
    }

    function resetForm(){
        setNewNote({
            commenter: "",
            comment: "",
        })
    }

    // {(student.notes.length > 0) ?
    // <li>  {newNote.commenter} says "{newNote.comment}"</li>
    // :  null }

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

                    <form className='note' onSubmit={handleSubmit}>
                        <label className="oneCommenter" htmlFor="commenter">Commenter Name:    
                                <input  
                                        name="commenter"
                                        type="text" 
                                        id= "commenter" 
                                        onChange={handleTextChange}
                                        value={newNote.commenter}
                                 />
                        </label>
                < br/>< br/>
                        <label className="oneComment" htmlFor="comment">Comment:    
                                <input  
                                        name="comment"
                                        type="text" 
                                        id= "comment"
                                        onChange={handleTextChange}
                                        value ={newNote.comment}
                                 />
                        </label> < br/>< br/>
                        <input className="addNoteButton" type="submit" value="Add Note"
                        onClick={()=>{ <ul>{addNote(newNote.commenter, newNote.comment)} </ul>

                        }}
                        
                        />  
                     </form> 
                    

            </ul>

            
</div>
  );
};




