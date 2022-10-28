import React, { useState } from 'react';
import Student from './Student';


const AllStudents = ({Data, classSeason}) => {

//    const[title,setTitle]= useState("All Students")
  
//    function cohortlist
//    let cohort = [...new Set(Data.map((date)=>date.cohort.cohortCode))]
//    cohort.map((student)=>{
//     return (
//     <div> 
//         <li>{student.slice(0,-4)+" "+student.slice(-4)}</li>
//     </div>)
// })
   
    return (
        <div >
            <aside className='semesterAndYear'>
                <h2 className='headerForStudents'>All Students</h2>
            <h3> Total Students:{classSeason.length}</h3>
                {
                    classSeason.map((student)=>{
                        return <Student student={student}/>
                    })
                }

                
                
            </aside>
        </div>
    );
}

export default AllStudents;

// import state & react
// pass 