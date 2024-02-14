import React from "react";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";

const ChatBox = () => {
  const messages = [
    {
      message: "Lorem ipsum dolor sit amet...",
      username: "user1",
      type: "received",
      timestamp: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    },
    {
      message: "Lorem ipsum dolor sit amet...",
      username: "user1",
      type: "sent",
      timestamp: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    },
    {
      message: "Lorem ipsum dolor sit amet...",
      username: "user1",
      type: "received",
      timestamp: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    },
    {
      message: "Lorem ipsum dolor sit amet...",
      username: "user1",
      type: "sent",
      timestamp: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    },
    {
      message: "Lorem ipsum dolor sit amet...",
      username: "user1",
      type: "received",
      timestamp: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    },
    {
      message: "Lorem ipsum dolor sit amet...",
      username: "user1",
      type: "sent",
      timestamp: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    },
    {
      message: "Lorem ipsum dolor sit amet...",
      username: "user1",
      type: "received",
      timestamp: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    },
    {
      message: "Lorem ipsum dolor sit amet...",
      username: "user1",
      type: "sent",
      timestamp: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    },
  ];
  

  return (
    <main className="w-full flex flex-grow overflow-auto rounded-xl bg-gray-200 shadow-md h-96">
      <div className="w-full flex flex-col space-y-4 overflow-y-auto p-4 pb-8">
        {messages.map((message) =>
          message.type === "received" ? (
            <RecievedMessage
              key={message.message}
              message={message.message}
              username={message.username}
              timestamp={message.timestamp}
            />
          ) : (
            <SentMessage key={message.message} message={message.message} timestamp={message.timestamp} />
          )
        )}
      </div>
    </main>
  );
};

export default ChatBox;
