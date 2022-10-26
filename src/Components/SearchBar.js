import React from 'react';


function SearchBar({data, setStudents, setCohortName, students,search, setSearch, setSelect}) {
    
    // function for filtering students by search value
    function searchFilter(input) {
        const string = input.toLowerCase()
        
        const searchedStudent = students.filter(({names}) => {
            const studentLowerCaseMiddle = `${names.preferredName.toLowerCase()} ${names.middleName.toLowerCase()}`
            const studentLowerCaseLast = `${names.preferredName.toLowerCase()} ${names.surname.toLowerCase()}`
            
            return studentLowerCaseMiddle.includes(string) || studentLowerCaseLast.includes(string)
        })
        
        if(input === ""){
            setStudents(data)
            setSelect("all")
            setCohortName(`All Students`)
        }
        else if(!searchedStudent.length){
            setStudents(students)
        }
        else{
            setStudents(searchedStudent)
        }
    }

    // function for on change in search bar
    function handleSearch(e) {
        const value = e.target.value
        setSearch(value)
        searchFilter(value) 
    }

    return (
        
        <input
        id = "searchbar"
        type= "text"
        placeholder='Search Students'
        value={search}
        onChange ={(event) => {handleSearch(event)}}

        />
        
        
    );
}

export default SearchBar;