import React from 'react';
import { aboutMe } from '../data/helperFunctions';
import { useState } from 'react';
function Me({setStudents, data}) {
    // declare state for on click
    const [showAboutMe, setShowAboutMe] = useState(false)
    
    // function on click button
    function handleAboutMe() {
        setShowAboutMe(!showAboutMe)
        if(showAboutMe){
            setStudents(aboutMe)
        }
        else{
            setStudents(data)
        }
    }
    return (
        <>
        <button
        id= 'developer'
        onClick={() => {handleAboutMe()}}
       
       > Developer</button>
       
       
        </>
      
    );
}

export default Me;