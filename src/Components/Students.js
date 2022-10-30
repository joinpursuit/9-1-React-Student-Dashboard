

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
{/* <br /><br /> */}
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
                    <p className='studentTag'>
                        <img src = {student.profilePhoto}/>   
                        <span className ="studentName"> 
                        <span className='fName'>  {student.names.preferredName} </span> 
                            {student.names.middleName.slice(0,1)+"."} <br />  
                            {student.names.surname}<br /> 
                            {student.username} <br /> 
                            <span className='birthday'>Birthday:</span> {student.dob}<br /> 
                        
                        <button onClick={handleClickToggle} className='showMoreButton' > 
                            {toggle ? "Show Less..." : "Show More..."}
                        </button>
                        </span>
                    </p>
                   { toggle ?  < StudentInfo student = {student}/> : null}
                   
                </div>  
            )})
         }
     </div>
            :
            
            selectedStudents.map((student) => {
            return(
                <div className ="allStudentsList" key = {student.id}  >                 
                <p className='studentTag'>
                    <img src = {student.profilePhoto}/>   
                    <span className ="studentName"> 
                    <span className='fName'>  {student.names.preferredName} </span> 
                        {student.names.middleName.slice(0,1)+"."} <br />  
                        {student.names.surname}<br /> 
                        {student.username} <br /> 
                        <span className='birthday'>Birthday:</span> {student.dob}<br /> 
                    
                    <button onClick={handleClickToggle} className='showMoreButton' > 
                        {toggle ? "Show Less..." : "Show More..."}
                    </button>
                    </span>
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