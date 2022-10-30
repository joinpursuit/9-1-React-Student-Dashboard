

import React from 'react';
import { useState } from 'react';
import data from "../data/data.json"
import { StudentInfo } from './StudentInfo';

// allStudents = data 
const Students = ({students, setStudents, cohort}) => {
const[toggle, setToggle] = useState(false)
const selectedStudents = students.filter(student => student.cohort.cohortCode === cohort)
// const[total, setTotal] = useState(students.length)
// setTotal(selectedStudents.length <- should have been a ternary expression to work)
//console.log("total from Studentsjs =", total)

function handleClickToggle(){
    setToggle(!toggle)
}
// onClick={handleClickToggle}

    return (
      <> 
     <div className="studentCards">

     <h3>Total:{cohort === "allStudents" ? students.length :selectedStudents.length} </h3> 
     
       { 
       

       cohort === "allStudents" ? 
        
    <div>
        {

        students.map((student) => {
            return(
                <div className ="allStudentsList" key = {student.id}  >
                    
                    <img src = {student.profilePhoto}/>
                    <p className='studentTag'>{student.names.preferredName}  
                    <span className ="studentName"> {student.names.middleName.slice(0,1)+"."}  </span> 
                    <span className ="studentName">{student.names.surname}</span><br />
                    <span className ="studentName">{student.username} </span><br />
                    <span className='birthday'>Birthday:</span> <span>{student.dob}</span><br /><br />
                    
                    <button onClick={handleClickToggle} className='showMoreButton' > 
                        {toggle ? "Show Less..." : "Show More..."}
                    </button>
                    </p>
                   { toggle ?  < StudentInfo student = {student}/> : null}
                   
                </div>  
            )})
         }
     </div>
            :
            
            selectedStudents.map((student) => {
            return(
                <div className ="studentInfo" key = {student.id}  >
                    <img src = {student.profilePhoto}/>
                    <p className='studentTag'>  
                    <span  className = "studentName">  {student.names.preferredName}   </span>
                    <span className ="studentName"> {student.names.middleName.slice(0,1)+"."}  </span> 
                    <span className ="studentName">{student.names.surname}</span><br />
                    <span className ="studentName">{student.username} </span><br />
                    <span className='birthday'>Birthday:</span> <span>{student.dob}</span><br /><br />
                    <button onClick={handleClickToggle} className='showMoreButton' > 
                    {toggle ? "Show Less..." : "Show More..."}
                </button>
                    </p>
                    { toggle ?  < StudentInfo student = {student}/> : null}
                </div>  
            )})

            
        }
     </div>
     </> 
    )
};

export default Students;