import React from 'react';
import { useState } from 'react';
import { sortCohort } from '../data/helperFunctions';
import { filterStudents } from '../data/helperFunctions';
import CohortOrderButton from './CohortOrderButton';


function CohortList({data, setStudents, setCohortName, setSearch, setSelect, setSearchResult}) {
// Declare state for cohort List
const [cohortList, setCohortList] = useState(sortCohort(data))

// function for onClick cohort
function cohortFilter(e) {
   const cohortName = e.target.id
   setCohortName(e.target.innerText)
   
   if(cohortName === "AllStudents"){
      setStudents(data)
      setSearchResult(data)
   }
   else{
      // filterStudents(cohortName,setStudents,data)

      //   function for filtering students by cohort name
      const filteredStudentArray = data.filter(({cohort}) => 
       cohort.cohortCode === cohortName
    )
    setStudents(filteredStudentArray)
    setSearchResult(filteredStudentArray)

      
   }
  // *****clear searchbar and dropdown if cohort is clicked******
  setSearch("")
  setSelect("all")
  


  
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
        ><span
        id = {code} 
        onClick = {(event) => {cohortFilter(event)}}
        >{el}</span>
         <hr />
        
        </h4>
         })} 
        
       </>
    );
}

export default CohortList;