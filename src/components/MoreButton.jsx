import React from 'react'

export default function MoreButton({list, setList, searchTerm, setSearchTerm, buttonCLick, pageToken}) {
    return (
        <div className="moreButton">
            <button className="mb" onClick={(e) => buttonCLick(searchTerm, e, pageToken, list)} >More</button>
        </div>
    )
}
