import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addMessages } from "../utils/chatSlice";
import { generateRandomFirstName } from "../utils/helper";
import SendChatMessage from "./SendChatMessage";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [liveMessage, setLiveMessage] = useState('');
console.log(liveMessage,"liveMessage");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const handleSend= () =>{
    
  }

  const handleChatSubmit = (message) => {
    dispatch(addMessages({name:"Anson",message: message}))
   
  }
  return (
    <div className="relative ">
      <div className="flex">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="live-chat flex flex-col min-w-fit ">
          <div className="p-2 font-semibold block">Live Chat</div>
          <LiveChat />
         
        </div>
      </div>
      <SendChatMessage
        userName="Your Name"
        onSubmit={handleChatSubmit}
      />
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
