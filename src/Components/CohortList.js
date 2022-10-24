import React from 'react';
import { sortCohort } from '../data/helperFunctions';


function CohortList({data, setStudents, setCohortName}) {

// get array of sorted cohorts
const cohorts = sortCohort(data)

// function to filter students based on cohort
function filterStudents(string) {
   const filteredStudentArray = data.filter(({cohort}) => 
      cohort.cohortCode === string
   )
   setStudents(filteredStudentArray)
}

// function for onClick cohort
function cohortFilter(e) {
   const cohortName = e.target.id
   setCohortName(e.target.innerText)
   if(cohortName === "AllStudents"){
      setStudents(data)
   }
   else{
      filterStudents(cohortName)
   }
}

    return (
       <>
       {
       cohorts.map(el =>{
       const code = el.split(` `).join(``)
      
        return <h4
        className='cohort' 
        key = {el}
        id = {code} 
        onClick = {(event) => {cohortFilter(event)}}
        >{el} 
         <hr />
        
        </h4>
         })} 
        
       </>
    );
}

export default CohortList;