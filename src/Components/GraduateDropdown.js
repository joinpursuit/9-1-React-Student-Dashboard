import React from 'react';

function GraduateDropdown({students,setStudents,data}) {
    // function for filter by graduation status
    function graduateStudents() {
        const graduateFilteredArr = students.filter(({codewars, certifications}) =>
          codewars.current.total > 600 && certifications.resume && certifications.linkedin && certifications.github && certifications.mockInterview 
        )
        console.log(graduateFilteredArr)
        return graduateFilteredArr
    }
    // function for dropdown onChange
    function dropDownHandle(e) {
        const value = e.target.value
        if(value === "graduate"){
            setStudents(graduateStudents())
        }
        else{
            setStudents(data)
        }
    }
    // thisPerson.map(({codewars, certifications }) => 
    //                 codewars.current.total > 600 && certifications.resume && certifications.linkedin && certifications.github && certifications.mockInterview 
    return (
       <select
       onChange={(event) => {dropDownHandle(event)}}>
            <option
            value = "">All Students</option>
            <option
            value = "graduate"
            >On Track To Graduate</option>
       </select>
    );
}

export default GraduateDropdown;