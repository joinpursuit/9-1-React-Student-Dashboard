import React from 'react';
import { useState } from 'react';

function CohortOrderButton({cohortList, setCohortList}) {

    // Declare state for button toggle
    const [buttonClick, setButtonClick] = useState(false)

    function handleButtonOnClick() {
        const arr = [...cohortList]
        const allStudents = arr.shift()
        arr.reverse().unshift(allStudents)
        setCohortList(arr)
        setButtonClick(!buttonClick)
    }
    return (
        <button
        className='cohortButton'
        onClick={() => {handleButtonOnClick()}}>
            {buttonClick ? "Descending Order" : "Ascending Order"}
        </button>
    );
}

export default CohortOrderButton;