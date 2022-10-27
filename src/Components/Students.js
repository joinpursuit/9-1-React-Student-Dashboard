import React from 'react';
import data from "../data/data.json"

// allStudents = data 
const Students = ({students}) => {

//console.log("this is from the Students component - ",students)
    
  
    
    return (
     <div >
       { 
        students.map((student) => {
            return(
            <div className ="allStudentsList" key = {student.id}  >
                <img src = {student.profilePhoto}/>
                <p>{student.names.preferredName} 
                <span className ="studentName"> {student.names.middleName} </span>
                <span className ="studentName">{student.names.surname}</span>
                <span className ="studentName">{student.username} </span>
                <span className='birthday'>"Birthday: "</span> <span>{student.dob}</span></p>
                <button className='showMoreButton'>Show More...</button>
            </div>  
            )
        })
    
        }
     </div>
     
     
    )
};

export default Students;