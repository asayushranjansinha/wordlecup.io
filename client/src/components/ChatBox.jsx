import React from "react";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";
import ReactScrollToBottom from "react-scroll-to-bottom";
import InformationMessage from "./InformationMessage";

const ChatBox = ({ messageList }) => {
  return (
    <main className="w-full flex flex-grow overflow-auto h-96">
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
              return (
                <InformationMessage key={idx} message={message.content} />
              );
            default:
              return null;
          }
        })}
      </ReactScrollToBottom>
    </main>
  );
};

export default ChatBox;
