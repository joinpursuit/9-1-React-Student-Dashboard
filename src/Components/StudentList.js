import React from 'react';
import { middleName } from '../data/helperFunctions';
import Birthday from './Birthday';
import Graduate from './Graduate';
import ShowMoreButton from './ShowMoreButton';
import StudentCohortLink from './StudentCohortLink';
function StudentList({students,setStudents,data,setCohortName, setSearchResult, setSelect, setSearch}) {
   
    return (
        <>
        {
            students.map(({id,names,username,profilePhoto,dob,notes,cohort}) => {
                const firstName = names.preferredName
                const middleInitial = middleName(names.middleName)
                const lastName = names.surname
                
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
                                    <br></br>
                                    
                                    <StudentCohortLink
                                    id = {id}
                                    setStudents = {setStudents}
                                    cohort = {cohort} 
                                    data = {data}
                                    setCohortName = {setCohortName}
                                    setSearchResult = {setSearchResult}
                                    setSelect = {setSelect}
                                    setSearch = {setSearch}/>
                                    
                                </div>
                                <Graduate
                                    thisId = {id}
                                    students = {students} />
                            </div>
                            <ShowMoreButton 
                                    id = {id}
                                    students = {students}
                                    />
                                    <br></br>
                                    <br></br>
                            </div>
                    )
            })
        }
        </>
    );
}

export default StudentList;