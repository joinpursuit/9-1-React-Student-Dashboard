import React from 'react';
import { useState } from 'react';
import { filterStudents } from '../data/helperFunctions';

function SearchBar({data, setStudents, setCohortName, cohortName, students,search, setSearch, setSelect}) {
    console.log(cohortName.split(` `).join(``))
    const copyStudents = [...students]
    console.log(`copy`,copyStudents)
    const [searchResult, setSearchResult] = useState([...copyStudents])
    console.log(`search`,searchResult)
    // function for filtering students by search value
    function searchFilter(input) {
        const string = input.toLowerCase()
       
        const searchedStudent = searchResult.filter(({names}) => {
            const studentLowerCaseMiddle = `${names.preferredName.toLowerCase()} ${names.middleName.toLowerCase()}`
            const studentLowerCaseLast = `${names.preferredName.toLowerCase()} ${names.surname.toLowerCase()}`

            if(input === ""){
                return names
            }
            else{
                return studentLowerCaseMiddle.includes(string) || studentLowerCaseLast.includes(string)
            }
            
           
        })

        console.log(`result`,searchedStudent)
        setStudents(searchedStudent)
        // return searchedStudent
    }
        
        // if(input === ""){
        //     setStudents(data)
        //     setSelect("all")
        //     setCohortName(`All Students`)
        // }
        // else if(!searchedStudent.length){
        //     setStudents(students)
        // }
        // else{
        //     setStudents(searchedStudent)
        // }
    

    // function for on change in search bar
    function handleSearch(e) {
        const value = e.target.value
        setSearch(value)
        searchFilter(value)
        // setStudents(searchResult)
       
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