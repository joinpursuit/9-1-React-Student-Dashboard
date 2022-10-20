import React from 'react';
import { sortCohort } from '../data/helperFunctions';

function CohortList({data}) {
const cohorts = sortCohort(data)

    return (
       <>
       {cohorts.map(el => 
        <div className='cohort'>
           <h3>{el}</h3>
        </div>)}
       </>
    );
}

export default CohortList;