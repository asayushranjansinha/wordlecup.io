import React from 'react'

function InputBox() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-200">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:shadow-outline"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md ml-2">
          Send
        </button>
      </div>
  )
}

export default InputBox