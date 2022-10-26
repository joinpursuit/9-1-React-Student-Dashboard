import React from 'react';
import { useState } from 'react';

function SearchBar({data, setStudents}) {
    // Declare State to store user inputted search
    const [search, setSearch] = useState("")
    
    // function for filtering students by search value
    function searchFilter(input) {
        const string = input.toLowerCase()
        const searchedStudent = data.filter(({names}) => {
            const studentLowerCase = `${names.preferredName.toLowerCase()} ${names.surname.toLowerCase()}`
            return studentLowerCase.includes(string)
            
        })
        setStudents(searchedStudent)

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
        placeholder='Search'
        value={search}
        onChange ={(event) => {handleSearch(event)}}

        />
    );
}

export default SearchBar;