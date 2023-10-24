import React, { useEffect, useState } from "react";
import { MOVIELIST_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [videos, setVideos] = useState([]);
  // console.log("Anson");

  // useEffect(()=>{
  //   getVideos();
  //   console.log("called get vidos",getVideos());

  // },[]);

  // const getVideos = async () =>{
  //   const data = await fetch(MOVIELIST_API);
  //   const jsonData = await data.json();
  //   setVideos(jsonData.items);
  // }

  useEffect(() => {
    getVideosApiCall();
  }, []);

  const getVideosApiCall = async () => {
    const data = await fetch(MOVIELIST_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  console.log(videos, "mx-auto");

  return (
    <div className="py-4 grid grid-cols-4 gap-2">
      {videos?.map((video) => (
        <Link to={"watch?v="+video.id}>
        <VideoCard key={video.id} videoInfo={video} />
        </Link>
      ))}

      {/* <VideoCard videoInfo = {videos[0]}/> */}
    </div>
  );
};

export default VideoConatiner;
