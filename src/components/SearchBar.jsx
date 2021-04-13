import React from 'react'

export default function SearchBar({list, setList, searchTerm, setSearchTerm, buttonCLick, pageToken}) {

    function onSearchChange(e) {   
        setSearchTerm(e.target.value);     
    }

    return (
        <div className="searchBar">
            <div className="youtubeSearchBar">You<span>Tube</span>SearchBar</div>
            <form className="search">
                <input className="searchBox" onChange={onSearchChange} placeholder={searchTerm} type="text" />
                <button className="searchButton" onClick={(e) => buttonCLick(searchTerm, e, pageToken, list)}>Search</button>
            </form>
        </div>
    )
}
