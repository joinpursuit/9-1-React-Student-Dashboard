import React from 'react';

function GraduateDropdown({students,setStudents,data, select, setSelect, setSearch}) {

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
        }
        else if(value === 'all'){
            setStudents(data) 
            setSearch("")
        }
}
  
    return (
       <select
       onChange={(event) => {dropDownHandle(event)}}
       value = {select}>
            <option
            value = "all">All Students</option>
            <option
            value = "graduate"
            >On Track To Graduate</option>
       </select>
    );
}

export default GraduateDropdown;