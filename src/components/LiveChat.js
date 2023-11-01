import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import chatSlice, { addMessages } from "../utils/chatSlice";
import {
  generateRandomFirstName,
  generateRandomChatMessage,
  getRandomWordCount,
} from "../utils/helper";

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
    }, 40000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="livechat-wrapper p-2 m-2 flex  border border-blue-950 flex-grow bg-slate-100 rounded-lg  h-[484px]">
      <div className="chat-conatiner flex flex-col-reverse overflow-y-scroll">
        {chatMessages.map((cm) => (
          <ChatMessage name={cm.name} message={cm.message} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
