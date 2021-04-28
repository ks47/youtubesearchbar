import React from 'react'
import './SearchBar.css'

export default function SearchBar({list, setList, searchTerm, setSearchTerm, buttonCLick, pageToken}) {

    function onSearchChange(e) {   
        setSearchTerm(e.target.value);     
    }

    return (
        <div className="searchBar">
            <div className="youtubeSearchBar">YouTube<span>SearchBar</span></div>
            <form className="search">
                <input className="searchBox" onChange={onSearchChange} placeholder={searchTerm} type="text" />
                <button className="searchButton" onClick={(e) => buttonCLick(searchTerm, e, pageToken, list)}>Search</button>
            </form>
        </div>
    )
}
