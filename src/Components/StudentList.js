import React from 'react';
import { middleName } from '../data/helperFunctions';
function StudentList({data}) {
   
    
    
    return (
        <>
        {
            data.map(({id,names,username,profilePhoto,notes},i) => {
                const firstName = names.preferredName
                const middleInitial = middleName(names.middleName)
                const lastName = names.surname
                if(i<10){
                    return(
                        <div 
                        className='student'
                        key={id}>
                            <img src = {profilePhoto} alt = 'profilePhoto'></img>
                            <div className='studentInfo'>
                                <h4>{firstName} {middleInitial} {lastName}</h4>
                                <span className='userName'>{username}</span>
                            </div>
               
            </div>
                    )
                }
                
            })
        }
        </>
        
        
    );
}

export default StudentList;