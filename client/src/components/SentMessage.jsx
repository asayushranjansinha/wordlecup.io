import React from "react";

const SentMessage = ({ message, timestamp }) => {
  return (
    <div className="flex items-center bg-green-300 rounded-lg shadow-md mb-4 px-4 py-2 self-end">
      {/* Message content */}
      <div className="flex flex-col ml-6">
        <p className="mt-1 text-gray-700">{message}</p>
        <span className="text-gray-500 text-sm mt-2">{timestamp}</span>
      </div>
    </div>
  );
};

export default SentMessage;
