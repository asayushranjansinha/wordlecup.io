import React from 'react';

const RecievedMessage = ({ message, username, timestamp }) => {
  return (
    <div className="w-fit flex items-center bg-blue-300 rounded-lg shadow-md mb-4 px-3 py-2">
      {/* Message content */}
      <div className="flex flex-col ml-6">
        <span className="text-gray-700 font-medium opacity-40">{`@${username}`}</span>
        <p className="mt-1 text-gray-700">{message}</p>
        <span className="text-gray-500 text-sm mt-2">{timestamp}</span>
      </div>
    </div>
  );
};

export default RecievedMessage;
