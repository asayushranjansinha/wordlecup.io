import React from "react";

const RecievedMessage = ({ message, username, timestamp }) => {
  return (
    <div className="w-fit min-w-40 flex items-center bg-blue-300 rounded-lg shadow-md mb-4 px-2 py-1">
      {/* Message content */}
      <div className="w-full flex flex-col">
        <span className="text-gray-700 font-medium opacity-60 text-sm">{`@${username}`}</span>
        <p className="mt-1 text-gray-700 text-sm">{message}</p>
       <span className="text-xs text-gray-500 text-end">{timestamp}</span>
      </div>
    </div>
  );
};

export default RecievedMessage;
