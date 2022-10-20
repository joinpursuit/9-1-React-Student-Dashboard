import React from 'react';
import { sortCohort } from '../data/helperFunctions';


function CohortList({data}) {
const cohorts = sortCohort(data)

    return (
       <>
       {cohorts.map(el =>{
       const code = el.split(` `).join(``)
        return <div className='cohort' key = {el}>
           <h3
           value = {code} 
           >{el}</h3>
        </div>})} 
       </>

    );
}

export default CohortList;