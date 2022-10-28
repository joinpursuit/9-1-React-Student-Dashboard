import React, { useState } from 'react';
import Student from './Student';


const AllStudents = ({Data, classSeason}) => {

    const [showMore, setShowMore]= useState(false)
  

   
    return (
        <div >
            <aside className='semesterAndYear'>
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