import React from 'react';
import { useState } from 'react';
import { sortCohort } from '../data/helperFunctions';


function CohortList({data, students, setStudents, setCohortName}) {
// Declare state for seasons
const [winter, setWinter] = useState(false)
const [fall, setFall] = useState(false)
const [summer, setSummer] = useState(false)
const [spring, setSpring] = useState(false)

const cohorts = sortCohort(data)

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
       const season = el.split(` `)[0]
       const year = el.split(` `)[1]
      
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