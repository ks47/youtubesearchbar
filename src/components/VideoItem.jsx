import React from 'react'

export default function VideoItem(item) {
    console.log("item is")
    console.log(item)
    const newItem = item.item
    return (
        <div className="videoBox">
                <iframe className="videoFrame"
                    src={"https://www.youtube.com/embed/" + newItem.id.videoId}
                    title={newItem.id.videoId}
                    >
                </iframe>                    
                <div className="videoTitle"><a className="videoLink" href={"https://www.youtube.com/embed/" + newItem.id.videoId}>{newItem.snippet.title}</a></div>  
                
                <div className="videoText"><b>Channel Name:</b> <a className="channelLink" href={"https://www.youtube.com/" + newItem.snippet.channelId}>{newItem.snippet.channelTitle}</a></div>
                <div className="videoText"><b>Published At:</b> {newItem.snippet.publishedAt}</div>
                <div className="videoText"><b>Video Description:</b> {newItem.snippet.description}</div>
        </div>
    )
}
