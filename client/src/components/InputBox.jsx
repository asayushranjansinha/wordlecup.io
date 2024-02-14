import React, { useState } from "react";

function InputBox({ sendMessage }) {
  const [messageContent, setMessageContent] = useState("");

  function handleClick() {
    sendMessage(messageContent);
    setMessageContent("");
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage(messageContent);
      setMessageContent("");
    }
  }
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-200">
      <input
        type="text"
        placeholder="Type your message..."
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:shadow-outline placeholder:text-sm md:placeholder:text-md"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md ml-2"
      >
        Send
      </button>
    </div>
  );
}

export default InputBox;
