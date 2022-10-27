import React from 'react';
import data from "../data/data.json"

// allStudents = data 
const Students = ({students}) => {

// const studentInitial = students.names.middleName.splice(0,1)
// studentInitial = studentInitial.slice(0,1)
//console.log("this is from the Students component - ",students)
    
  
    
    return (
     <div >
       { 
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
            )
        })
    
        }
     </div>
     
     
    )
};

export default Students;