import React from 'react'
import VideoItem from './VideoItem'

export default function VideoScroll(itemList) {

    console.log("in video scroll, list is: ")
    console.log(itemList.itemList)
    const newList = itemList.itemList

    return (
        <div className="videoTable" >
            
            {
                newList.map(item => 
                    <VideoItem key={item.id.videoId} item={item} />
                    )
            }
        </div>
    )
}
