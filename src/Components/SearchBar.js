import React from 'react';

function SearchBar({students, setStudents}) {
    return (
        <input
        id = "searchbar"
        type= "text"
        placeholder='Search'
        />
    );
}

export default SearchBar;