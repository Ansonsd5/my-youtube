import React, { useEffect, useState } from "react";
import { MOVIELIST_API } from "../utils/constants";
import VideoCard, { HighestLikedVideoCard } from "./VideoCard";
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

  return (
    <div className="py-4 grid grid-cols-4 gap-2">
      {console.log(videos[0], "Anson")}
      {videos?.map((video) => (
        <>
          <></>
          {video.statistics.likeCount.length >= 7 ? (
            <div>
              <HighestLikedVideoCard videoInfo={video} />
            </div>
          ) : (
            <Link to={"watch?v=" + video.id} key={video.id}>
              <VideoCard videoInfo={video} />
            </Link>
          )}
        </>
      ))}

    </div>
  );
};

export default VideoConatiner;
