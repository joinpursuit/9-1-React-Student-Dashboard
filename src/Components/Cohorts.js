import Data from '../data/data.json'
import React, {useState} from 'react';

const Cohorts = () => {
    const cohortYears = Data.map((data) => data.cohort.cohortCode.replace('2', ' 2'))
    const uniqueYears = [...new Set(cohortYears)]

    function getStudentInformation () {
        Data.filter((data) => data.c)
    }

    const cohort = uniqueYears.map((data) => {
        return (
            <aside>
                
                <h4>{data}</h4>
            </aside>

        )
    })
    return (
        <div>
            <h2>Choose a Class by Start Date</h2>
            <p>All Students</p>
            {cohort}
        </div>
    );
};

export default Cohorts;