import React from "react";

function RecievedMessage({ message, username }) {
  return (
    <div className="inline-block px-4 py-2 rounded-lg bg-blue-300 self-start">
      <div className="flex items-center">
        <span className="font-medium opacity-40">{`@${username}`}</span>
      </div>
      <p className="ml-6">{message}</p>
    </div>
  );
}

export default RecievedMessage;
