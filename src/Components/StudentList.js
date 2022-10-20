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
                            
                            <div className='studentInfo'>
                            <img src = {profilePhoto} alt = 'profilePhoto'></img>
                            <span>
                                <h4>{firstName} {middleInitial} {lastName}</h4>
                                {username}</span>
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