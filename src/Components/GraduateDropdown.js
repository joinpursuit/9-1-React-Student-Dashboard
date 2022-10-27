import React from 'react';

function GraduateDropdown({students,setStudents,data, select, setSelect, setSearch, setCohortName, setSearchResult}) {

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
        setSearch("")
        if(value === "graduate"){
            setStudents(graduateStudents())
            setSearchResult(graduateStudents())
        }
        else if(value === 'all'){
            setStudents(data) 
            setCohortName(`All Students`)
            setSearchResult(data)
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