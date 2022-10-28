import {useState} from 'react';


const Student = ({student}) => {
    const [showDetails, setShowDetails] = useState(false)
   
    function toogleShowMore(){
        setShowDetails(!showDetails)
    }


// find a way for certifications to show 


    // 1-on-1 section
// create a function to get the button to work and not refresh the page
//      The section should show a list of all previous notes that have been added.
//      The form can be filled out and submitted. On submit, the inputs are cleared.
//      The submitted information is immediately shown in the list of notes.
//      While the notes will not persist if the page is loaded, the new notes should be found if you interact with a new cohort in the cohort list and then find the student.

    // function certifications(){
    //     if (student.certifications.resume === true && student.certifications.linkedin === true && student.certifications.github === true && student.mockInterview === true && student.codewars.current.total >600 ){
    //         return "On Track to Graduate"
    //     }
    // }



    return (
        <div className='entireProfile'>

            <img src={student.profilePhoto} alt="Profile "></img>
            <h4>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h4>
            <h5>{student.username}</h5>
            <h5>Birthday: {student.dob} </h5>
            {/* <h6>{certifications}</h6> */}
            <button onClick={toogleShowMore}>
            {!showDetails ? "Show more" : "Show less"}
           </button>
           {
            showDetails &&
                <div className='personDetails' >
                    <section id='codeWarsSection'>
                   <h3> CodeWars</h3>
                    <p>
                   <span> Current:</span>
                    {student.codewars.current.total}
                    </p>
                <p>
                    <span>
                       Lastweek: 
                    </span>
                    {student.codewars.current.lastWeek}
                </p>
                <p>
                    <span>Goal:</span>
                    {student.codewars.goal.total}
                </p>
                    </section>

                    <section id='scoresSection'>
               <h3>Scores</h3>
               <p>
                <span>Assignments:</span>
                {student.cohort.scores.assignments * 100}%
               </p>
               <p>
                <span>Projects:</span>
                {student.cohort.scores.projects}%
               </p>
               <p>
                <span>Assessments:</span>
                {student.cohort.scores.assessments}%
               </p>
               </section>

               <section id='certifications'>
               <h3>Certifications</h3>
               <p>
                <span>Resume:</span>
                {student.certifications.resume}
               </p>
               <p>
                <span>LinkedIn</span>
                {student.certifications.linkedin}
               </p>
               <p>
                <span>
                    Github:
                </span>
                {student.certifications.github}
               </p>
               <p>
                <span>
                    Mock Interview:
                </span>
                {student.certifications.mockInterview}
               </p>
               </section>
               <section>
                <form>
                    <h2>1-on-1 Notes</h2>
                    <label>Commenter Name</label>
                    <input name="commenter" type="text" value={student.notes.commenter} ></input>
                    <label>Comment</label>
                    <input name="comment" type="text" value={student.notes.comment}></input>
                    <button>Add Note</button>
                </form>
               </section>
                    </div>
            
           }
        </div>
    )
};

export default Student;