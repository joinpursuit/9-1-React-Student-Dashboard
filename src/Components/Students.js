import React from 'react';
import data from "../data/data.json"

// allStudents = data 
const Students = ({students, setStudents, cohort}) => {

   const selectedStudents = students.filter(student => student.cohort.cohortCode === cohort)
   
    return (
     <div className="studentCards">
       { 

       cohort === "allStudents" ? 
        students.map((student) => {
            return(
                <div className ="allStudentsList" key = {student.id}  >
                    <img src = {student.profilePhoto}/>
                    <p className='studentTag'>{student.names.preferredName}  
                    <span className ="studentName"> {student.names.middleName.slice(0,1)+"."}  </span> 
                    <span className ="studentName">{student.names.surname}</span><br />
                    <span className ="studentName">{student.username} </span><br />
                    <span className='birthday'>Birthday:</span> <span>{student.dob}</span><br /><br /><button className='showMoreButton'>Show More...</button>
                    </p>
                    
                </div>  
            )})
            :
            selectedStudents.map((student) => {
                return(
                    <div className ="allStudentsList" key = {student.id}  >
                        <img src = {student.profilePhoto}/>
                        <p className='studentTag'>{student.names.preferredName}  
                        <span className ="studentName"> {student.names.middleName.slice(0,1)+"."}  </span> 
                        <span className ="studentName">{student.names.surname}</span><br />
                        <span className ="studentName">{student.username} </span><br />
                        <span className='birthday'>Birthday:</span> <span>{student.dob}</span><br /><br /><button className='showMoreButton'>Show More...</button>
                        </p>
                        
                    </div>  
                )})


        }
     </div>
     
     
    )
};

export default Students;