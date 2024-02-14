import React from "react";

const SentMessage = ({ message, timestamp }) => {
  return (
    <div className="flex justify-end">
      <div className="mr-4 w-fit min-w-40 flex items-center bg-green-300 rounded-lg shadow-md mb-4 px-4 py-2">
        {/* Message content */}
        <div className="w-full flex flex-col">
        <p className="mt-1 text-gray-700 text-sm">{message}</p>
          <span className="w-full text-xs text-gray-500 text-end">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
