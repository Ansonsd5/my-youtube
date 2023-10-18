import React, { useEffect } from 'react'
import { MOVIELIST_API } from '../utils/constants';

const VideoConatiner = () => {

useEffect(()=>{
  getVideos();
},[]);

const getVideos = async () =>{
  const data = await fetch(MOVIELIST_API);
  const jsonData = await data.json();

  console.log(jsonData);

}

  return (
    <div>VideoConatiner</div>
  )
}

export default VideoConatiner