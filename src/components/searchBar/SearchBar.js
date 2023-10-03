import React from 'react';
 import './SearchBar.scss'
function SearchBar({searchTerm, setSearchTerm}) {

const updateSearchTerm = (e) =>{
    console.log(e.target.value)
    setSearchTerm(e.target.value)

}

    return (
        <input 
        className="searchBar" 
        placeholder="Search By Name"
        value={searchTerm}
        onChange={updateSearchTerm}
        
        
        
        
        />
    );
}

export default SearchBar;