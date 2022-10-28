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

    // const [result, setResult]= useState("")

    // function handleSubmit (e){
    //     e.preventDefault()}

    //   function imorovedStudentList(student){
    //         if (student.codewars.current.total >=100){
    //          return <p style="color:green"></p>
    //         } else if (student.codewars.current.total > 50 && student.codewars.current.total < 100){
    //             return <p style="color:yellow"></p>
    //         } else {
    //             return <p style="color:red"></p>
    //         }
    //         }
    //     }
    let goalPercentage = (
        (student.codewars.current.total / student.codewars.goal.total) *
        100
      ).toFixed(0);
    
      function goalColor(goalPercentage) {
        if (goalPercentage >= 100) {
          return <span style={{ color: "green" }}>{goalPercentage}</span>;
        } else if (goalPercentage > 49) {
          return <span style={{ color: "yellow" }}>{goalPercentage}</span>;
        } else if (goalPercentage < 50) {
          return <span style={{ color: "red" }}>{goalPercentage}</span>;
        }
      }

    return (
        <div className='studentList'>

            <img src={student.profilePhoto} alt="Profile "></img>
            <h4>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h4>
            <h5>{student.username}</h5>
            <h5>Birthday: {student.dob} </h5>
            {/* <h6>{certifications}</h6> */}
            <button className="showMore"onClick={()=>{toogleShowMore(); goalColor(goalPercentage)}}>
            {!showDetails ? "Show more" : "Show less"}
           </button>
           {
            showDetails &&
                <div className='personDetails' >
                    <section id='codeWarsSection'>
                   <h3> CodeWars</h3>
                   <p>  </p>
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
                <p>
                <span>Percentage of Goal Achieved:</span>
                {goalColor(goalPercentage)}
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
                {student.cohort.scores.projects * 100}%
               </p>
               <p>
                <span>Assessments:</span>
                {student.cohort.scores.assessments * 100}%
               </p>
               </section>

               <section id='certifications'>
               <h4>Certifications:</h4>
                <p>Resume: 
                    {student.certifications.resume ? "✅" : "❌"}</p>
                <p>LinkedIn:
                     {student.certifications.linkedin ? "✅" : "❌"}</p>
                <p>Mock Interview: 
                    {student.certifications.github ? "✅" : "❌"}</p>
                <p>GitHub: 
                    {student.certifications.mockInterview ? "✅" : "❌"}</p>
               </section>
               <section>
                <form >
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



// onSubmit= {(event)=> {handleSubmit(event)}}setResult={setResult}