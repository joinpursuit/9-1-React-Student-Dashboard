import React from 'react';
import { sortCohort } from '../data/helperFunctions';


function CohortList({data}) {
const cohorts = sortCohort(data)

    return (
       <>
       {cohorts.map(el =>{
       const code = el.split(` `).join(``)
        return <h4
        className='cohort' 
        key = {el}
        value = {code} 
        >{el} 
         <hr />
        
        </h4>
         })} 
        
       </>

    );
}

export default CohortList;