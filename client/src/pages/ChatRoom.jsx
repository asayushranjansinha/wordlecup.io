import React, { useEffect } from "react";

import ChatBox from "../components/ChatBox";
import InputBox from "../components/InputBox";
import socketIo from "socket.io-client";
let count = 0;
function ChatRoom() {
  const ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;
  const socket = socketIo(ENDPOINT, { transports: ["websocket"] });
  useEffect(() => {
    socket.on("connect", () => {
      //   alert("Connected");
      console.log("connected"); //todo: replace with toast
    });
    return () => {
      return () => {
        socket.disconnect();
      };
    };
  }, []);
  console.log(count++);
  return (
    <div className="flex flex-col h-screen">
      {/* Chat Area */}
      <ChatBox />
      {/* Chat Input */}
      <InputBox />
    </div>
  );
}

export default ChatRoom;
