import React from 'react';
import { useState } from 'react';
import { middleName } from '../data/helperFunctions';
import Birthday from './Birthday';
import ShowMoreButton from './ShowMoreButton';
import StudentHiddenInfo from './StudentHiddenInfo';
function StudentList({data}) {
//    // declare state for toggling hidden class
//    const [clicked, setClicked] = useState(false)
    
    
    return (
        <>
        {
            data.map(({id,names,username,profilePhoto,notes,dob},i) => {
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
                                <div 
                                style={{
                                    marginLeft: "10px",
                                    marginTop: "20px"}}>
                                    <h4
                                    style={{marginBottom : "0"}}>{firstName} {middleInitial} {lastName}</h4>
                                    {username}
                                    <br></br>
                                    <Birthday
                                    dob = {dob} />
                                    
                                </div>
                                {/* <ShowMoreButton 
                                    id = {id}
                                    data = {data}
                                    /> */}
                            </div>
                            <ShowMoreButton 
                                    id = {id}
                                    data = {data}
                                    />
                                    <br></br>
                                    <br></br>
               
            </div>
                    )
                }
                
            })
        }
        </>
        
        
    );
}

export default StudentList;