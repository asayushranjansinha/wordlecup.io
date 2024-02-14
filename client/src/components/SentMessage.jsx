import React from "react";

const SentMessage = ({ message, timestamp }) => {
  console.log(message);
  return (
    <div className="flex justify-end">
      <div className="mr-4 w-fit min-w-40 flex items-center bg-green-300 rounded-lg shadow-md mb-4 px-4 py-2">
        {/* Message content */}
        <div className="flex flex-col ml-6">
          <p className="mt-1 text-gray-700">{message}</p>
          <span className="text-gray-500 text-sm mt-2">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
