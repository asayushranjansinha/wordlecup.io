import React from "react";
import RecievedMessage from "../components/RecievedMessage";
import SentMessage from "../components/SentMessage";
function ChatBox() {
  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      {/* Chat Messages */}
      <div className="flex flex-col space-y-4 overflow-y-auto p-4">
        <RecievedMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          username={"user1"}
        />
        <SentMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <RecievedMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          username={"user1"}
        />
        <SentMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <RecievedMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          username={"user1"}
        />
        <SentMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <RecievedMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          username={"user1"}
        />
        <SentMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <RecievedMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          username={"user1"}
        />
        <SentMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <RecievedMessage
          message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          username={"user1"}
        />
      </div>
    </main>
  );
}

export default ChatBox;
