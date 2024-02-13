import React from "react";

function SentMessage({ message }) {
  return (
    <div className="inline-block px-4 py-2 rounded-lg bg-green-300 self-end">
      <p className="">
        {message}
      </p>
    </div>
  );
}

export default SentMessage;
