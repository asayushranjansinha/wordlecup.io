import React from "react";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";
import ReactScrollToBottom from 'react-scroll-to-bottom'

const ChatBox = ({ messageList }) => {
  return (
    <main className="w-full flex flex-grow overflow-auto bg-gray-200 shadow-md h-96">
      <ReactScrollToBottom className="w-full flex flex-col space-y-4 p-4 pb-8">
        {messageList.map((message, idx) => {
          switch (message.type) {
            case "received":
              return (
                <RecievedMessage
                  key={idx}
                  message={message.content}
                  username={message.username}
                  timestamp={message.timestamp}
                />
              );
            case "sent":
              return (
                <SentMessage
                  key={idx}
                  message={message.content}
                  timestamp={message.timestamp}
                />
              );
            case "system":
              return <div>System message</div>;
            default:
              return null;
          }
        })}
      </ReactScrollToBottom>
    </main>
  );
};

export default ChatBox;
