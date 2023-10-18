import React from 'react'

const VideoCard = ({ videoInfo }) => {
    const {snippet,statistics} =videoInfo;
    const {channelTitle
        , thumbnails ,}= snippet;
    const {likeCount} = statistics;
  return (
    <div>
        <img src={thumbnails.medium.url}/>
        <div>{channelTitle
}</div>
        <div>Likes {" "} {likeCount}</div>
    </div>
  )
}

export default VideoCard