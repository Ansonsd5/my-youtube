import React, { useEffect, useState } from 'react'
import { MOVIELIST_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoConatiner = () => {

  const [videos,setVieos] = useState([]);



useEffect(()=>{
  getVideos();
},[]);

const getVideos = async () =>{
  const data = await fetch(MOVIELIST_API);
  const jsonData = await data.json();

  setVieos(jsonData.items);
}

  return (
    <div>
      <VideoCard videoInfo = {videos[0]}/>
    </div>
  )
}

export default VideoConatiner