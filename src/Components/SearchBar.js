import React from 'react';
import { useState } from 'react';

function SearchBar({data, setStudents, setCohortName, students,search, setSearch, setSelect}) {
    // // Declare State to store user inputted search
    // const [search, setSearch] = useState("")
    
    // function for filtering students by search value
    function searchFilter(input) {
        if(input === ""){
            setStudents(data)
            setSelect("all")
        }
        else{
            const string = input.toLowerCase()
            const searchedStudent = students.filter(({names}) => {
            const studentLowerCaseMiddle = `${names.preferredName.toLowerCase()} ${names.middleName.toLowerCase()}`

            const studentLowerCaseLast = `${names.preferredName.toLowerCase()} ${names.surname.toLowerCase()}`
            
            return studentLowerCaseMiddle.includes(string) || studentLowerCaseLast.includes(string)
            
        })
        setStudents(searchedStudent)

        }

    }

    // function for on change in search bar
    function handleSearch(e) {
        const value = e.target.value
        setSearch(value)
        setCohortName(`All Students`)
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