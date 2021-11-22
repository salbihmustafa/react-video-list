import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video }) => {
    //console.log(video);
    const title = video.snippet.title;
    const thumbnail = video.snippet.thumbnails.medium.url;
    const description = video.snippet.description;
  return (
    <div className="video-item item">
        <img className="ui image" src={thumbnail} alt={description} />
        <div className="content">
            <div className="header">{title}</div>
        </div>
    </div>
  )
}

export default VideoItem;