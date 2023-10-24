import React from 'react'

const VideoCard = ({ videoInfo }) => {
  console.log(videoInfo,"videoInfo");
    const {snippet,statistics} =videoInfo;
    const {channelTitle, thumbnails }= snippet;
    const {likeCount} = statistics;
  return (
    <div className='bg-gray-500 bg-opacity-30 p-2 mx-auto rounded-xl shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url}/>
        <div className='font-bold'>{channelTitle}</div>
        <div >Likes {" "} {likeCount} {" "}views</div>
    </div>
  )
}

export default VideoCard