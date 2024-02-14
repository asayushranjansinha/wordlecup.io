import React, { useEffect } from "react";

import ChatBox from "../components/ChatBox";
import InputBox from "../components/InputBox";
import useSocket from "../hooks/useSocket";
import SentMessage from "../components/SentMessage";
import RecievedMessage from "../components/RecievedMessage";

function ChatRoom() {
  const socket = useSocket();
  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("connected");
      });
    }
  }, []);
  return (
    <main className="w-full h-full">
      <div className="container mx-auto h-full flex flex-col">
        <ChatBox />
        <InputBox />
      </div>
    </main>
  );
}

export default ChatRoom;
