import React from 'react';
import { useState } from 'react';
import { middleName } from '../data/helperFunctions';
import ShowMoreButton from './ShowMoreButton';
import StudentHiddenInfo from './StudentHiddenInfo';
function StudentList({data}) {
//    // declare state for toggling hidden class
//    const [clicked, setClicked] = useState(false)
    
    
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
                                <img src = {profilePhoto} alt = 'profilePhoto' />
                                <p>
                                    <h4>{firstName} {middleInitial} {lastName}</h4>
                                    {username}<br></br>
                                    <ShowMoreButton 
                                    id = {id}
                                    data = {data}
                                    />
                                </p>
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