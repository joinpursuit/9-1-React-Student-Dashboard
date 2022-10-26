import React from 'react';
import { useState } from 'react';

function GraduateDropdown({students,setStudents,data, reset, setReset}) {
    // Declare Stae for selection value
    const [select, setSelect] = useState("all")
    // function for filter by graduation status
    function graduateStudents() {
        
        const graduateFilteredArr = students.filter(({codewars, certifications}) =>
          codewars.current.total > 600 && certifications.resume && certifications.linkedin && certifications.github && certifications.mockInterview 
        )
        return graduateFilteredArr
    }
    // function for dropdown onChange
    function dropDownHandle(e) {
        const value = e.target.value
        setSelect(value)
        
        if(value === "graduate"){
            setStudents(graduateStudents())
            setReset(false)
        }
        else if(value === 'all'){
            setStudents(data)
            setReset(true) 
            
        }
}
  
    return (
       <select
       onChange={(event) => {dropDownHandle(event)}}
       value = {reset ? "all" : select}>
            <option
            value = "all">All Students</option>
            <option
            value = "graduate"
            >On Track To Graduate</option>
       </select>
    );
}

export default GraduateDropdown;