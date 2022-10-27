import React from 'react';
import { useState } from 'react';
import { sortCohort } from '../data/helperFunctions';
import { filterStudents } from '../data/helperFunctions';
import CohortOrderButton from './CohortOrderButton';
import Me from './Me';


function CohortList({data, setStudents, setCohortName, setSearch, setSelect, setSearchResult}) {
// Declare state for cohort List
const [cohortList, setCohortList] = useState(sortCohort(data))

// function for onClick cohort
function cohortFilter(e) {
   const value = e.target.id
   setCohortName(e.target.innerText)
   
   if(value === "AllStudents"){
      setStudents(data)
      setSearchResult(data)
   }
   else{
      filterStudents(value, setStudents, setSearchResult, data)      
   }
  // *****clear searchbar and dropdown if cohort is clicked******
  setSearch("")
  setSelect("all")

}

    return (
       <>
       <Me
       setStudents= {setStudents}
       data = {data} />

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