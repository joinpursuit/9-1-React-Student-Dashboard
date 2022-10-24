import Data from '../data/data.json'
import React, {useState} from 'react';

const Cohorts = () => {
    const cohortYears = Data.map((data) => data.cohort.cohortCode.replace('2', ' 2'))
    const uniqueYears = [...new Set(cohortYears)]

    // const [cohortName, setCohortName] = useState(uniqueYears)

    const cohort = uniqueYears.map((data) => {
        return (
            <>
                <h4>{data}</h4>
            </>

        )
    })
    return (
        <div>
            {cohort}
        </div>
    );
};

export default Cohorts;