import React from 'react';
import { getMonthName } from '../data/helperFunctions';

function Birthday({dob}) {
    const dobArr = dob.split(`/`)
    const month = getMonthName(dobArr[0])
    const day = dobArr[1]
    const year = dobArr[2]
    return (
        <>
            <span
            style={{color: "green"}}>Birthday:</span> {month} {day}, {year} 
        </>
    );
}

export default Birthday;