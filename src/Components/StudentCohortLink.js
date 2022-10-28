import React from 'react';
import { filterStudents } from '../data/helperFunctions';



function StudentCohortLink({id,cohort,setStudents,data,setCohortName, setSearchResult, setSelect, setSearch}) {
const linkName = cohort.cohortCode.replace(2, ` 2`)

function studentCohort(e) {
    filterStudents(e.target.name, setStudents, setSearchResult, data)
    setCohortName(e.target.innerText)
    setSearch("")
    setSelect("all")
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