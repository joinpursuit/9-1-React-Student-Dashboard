import {useState} from 'react';


const Student = ({student}) => {
    const [showDetails, setShowDetails] = useState(false)
   
    function toogleShowMore(){
        setShowDetails(!showDetails)
    }

    // function certifications(){
    //     if (student.certifications.resume === true && student.certifications.linkedin === true && student.certifications.github === true && student.mockInterview === true && student.codewars.current.total >600 ){
    //         return "On Track to Graduate"
    //     }
    // }



    return (
        <div>

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
                <div className='personDetails'>
                   <h3> CodeWars</h3>
                    <p>
                   <span> Current:</span>
                    {student.codewars.current.total }
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

               <section>
                <form>
                    <h2>1-on-1 Notes</h2>
                    <label>Commenter Name</label>
                    <input name="" type="text" ></input>
                </form>
               </section>
                    </div>
            
           }
        </div>
    )
};

export default Student;