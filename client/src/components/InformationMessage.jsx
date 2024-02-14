import React from "react";

function InformationMessage({ message }) {
  return (
    <div className="w-full p-2">
      <p className="text-center text-gray-600 dark:text-neutral-300">{message}</p>
    </div>
  );
}

export default InformationMessage;
