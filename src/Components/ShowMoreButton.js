import { useState } from 'react';
import React from 'react';
import StudentHiddenInfo from './StudentHiddenInfo';

function ShowMoreButton({id,data}) {
    // declare state for toggling hidden class
    const [clicked, setClicked] = useState(false)

    // Declare state for value of button clicked/ id#
    const [studentId, setStudentId] = useState("")

    function handleShowMoreOnClick(e) {
        // value = student id#
        const value = e.target.name
        setStudentId(value)
        setClicked(!clicked)
        
        }
   
    return (
        <>
        <a
        href= "#"
        className='showMore'
        name={id}
        onClick = {(event) => {handleShowMoreOnClick(event)}}
        >Show More...
        </a>
        { clicked && <StudentHiddenInfo
        id = {id}
        studentId = {studentId}
        clicked = {clicked}
        data = {data}
        />}
        </>
        
    );
}

export default ShowMoreButton;