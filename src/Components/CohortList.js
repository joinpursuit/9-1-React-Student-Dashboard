import React from 'react';
import { useState } from 'react';
import { sortCohort } from '../data/helperFunctions';
import { filterStudents } from '../data/helperFunctions';
import CohortOrderButton from './CohortOrderButton';


function CohortList({data, setStudents, setCohortName}) {
// Declare state for cohort List
const [cohortList, setCohortList] = useState(sortCohort(data))


// function for onClick cohort
function cohortFilter(e) {
   const cohortName = e.target.id
   setCohortName(e.target.innerText)
   if(cohortName === "AllStudents"){
      setStudents(data)
   }
   else{
      filterStudents(cohortName,setStudents,data)
   }
}

    return (
       <>
       <CohortOrderButton
       cohortList = {cohortList}
       setCohortList = {setCohortList} />
       
       {
       cohortList.map(el =>{
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