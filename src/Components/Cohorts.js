import React from 'react'
import data from "../data/data.json"
import Students from "./Students"

export default function Cohorts({setCohort}) {

const allStudents = data

function handleClickUpdateAllCohorts(e){
    setCohort(e.target.name)
}

function handleClickUpdateCohort(e){
    setCohort(e.target.name) 
}


return (
    <>
        <div className='cohortButton' > 
            <button onClick={handleClickUpdateAllCohorts} name="allStudents" className ="allStudentsButton cohortButton" > All Students</button></div>
        <div className='cohortButton'>
            <button onClick={handleClickUpdateCohort} name="Winter2026" >Winter 2026</button></div>
        <div className='cohortButton'><button onClick={handleClickUpdateCohort} name="Fall2026">Fall 2026</button></div>
        <div className='cohortButton'><button onClick={handleClickUpdateCohort} name="Summer2026">Summer 2026</button></div>
        <div className='cohortButton'><button onClick={handleClickUpdateCohort} name="Spring2026">Spring 2026</button></div>
        <div className='cohortButton'><button onClick={handleClickUpdateCohort} name="Winter2025">Winter 2025</button></div>
        <div className='cohortButton'><button onClick={handleClickUpdateCohort} name="Fall2025">Fall 2025</button></div>
        <div className='cohortButton'><button onClick={handleClickUpdateCohort} name="Summer2025">Summer 2025</button></div>
        <div className='cohortButton'><button  onClick={handleClickUpdateCohort} name="Spring2025">Spring 2025</button></div>
    </>

    );
}

