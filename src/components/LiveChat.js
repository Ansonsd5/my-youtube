import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import chatSlice, { addMessages } from "../utils/chatSlice";
import {
  generateRandomFirstName,
  generateRandomChatMessage,
  getRandomWordCount,
} from "../utils/helper";
import SendChatMessage from "./SendChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomFirstName(),
          message: generateRandomChatMessage(getRandomWordCount(4, 6)),
        })
      );
    }, 4000);

    return () => clearInterval(i);
  }, []);

   const handleChatSubmit = (message) => {
    dispatch(addMessages({name:"Anson",message: message}));
   
  }
  return (
    <div className="livechat-wrapper p-2 m-2 flex  border border-blue-950 flex-grow bg-slate-100 rounded-lg  h-[484px]">
      <div className="chat-conatiner flex flex-col-reverse overflow-y-scroll h-[438px] w-[380px] ">
        {chatMessages.map((cm,index) => (<div key={index*'1'}>
          <ChatMessage name={cm.name} message={cm.message} />
        </div>))}
      </div>
      <div className="bottom-[24px] left-[36px] absolute ">
          <SendChatMessage
        userName="Your Name"
        onSubmit={handleChatSubmit}
      />
      </div>
    </div>
  );
};

export default LiveChat;
