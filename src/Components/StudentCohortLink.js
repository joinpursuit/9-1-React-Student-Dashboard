import React from 'react';
import { filterStudents } from '../data/helperFunctions';



function StudentCohortLink({id,cohort,setStudents,data,setCohortName, setSearchResult}) {
const linkName = cohort.cohortCode.replace(2, ` 2`)

function studentCohort(e) {
    filterStudents(e.target.name, setStudents, setSearchResult, data)
    setCohortName(e.target.innerText)
}
    return (
        <span>Cohort:  
            <a
            className='studentCohortLink'
            name = {cohort.cohortCode}
            onClick = {(event) => {studentCohort(event)}}>     {linkName}
        </a>
        </span>
    );
}

export default StudentCohortLink;