import { useState } from 'react';
import React from 'react';
import StudentHiddenInfo from './StudentHiddenInfo';

function ShowMoreButton({id,students}) {
    // declare state for toggling hidden class
    const [clicked, setClicked] = useState(false)

    // Declare state for value of button clicked/ id#
    const [studentId, setStudentId] = useState("")

    // Declare state for mouse over `show more`
    const [showMore, setShowMore] = useState(false)

    // Declare state for mouseOver
    const[cursor, setCursor] = useState(false)
    
    function handleShowMoreOnClick(e) {
        // value = student id#
        const value = e.target.name
        setStudentId(value)
        setClicked(!clicked)
        setShowMore(!showMore)
        
        }
   
    return (
        <>
        <a
        className='showMore'
        name={id}
        onClick = {(event) => {handleShowMoreOnClick(event)}}
        >{showMore ? "Show Less..." : "Show More..."}
        </a>
        { clicked && <StudentHiddenInfo
        id = {id}
        studentId = {studentId}
        clicked = {clicked}
        students = {students}
        />}
        </>
        
    );
}

export default ShowMoreButton;