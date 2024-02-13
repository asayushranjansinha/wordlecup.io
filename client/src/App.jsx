import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  return (
    <main className="h-screen bg-blue-50 flex items-center justify-center">
      <div className="h-5/6 w-11/12 max-w-lg border border-red-800 flex flex-col justify-center items-center p-6 rounded-md shadow-lg bg-white">
        <h1 className="text-center text-xl font-bold mb-4">
          Welcome to <span className="text-red-800">WordleCup</span> Realtime
          Chat
        </h1>
        <div className="flex flex-col w-full mb-4">
          <label
            htmlFor="username"
            className="text-gray-700 font-bold mb-2 text-center"
          >
            Enter Your Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Enter Chat Room
        </button>
      </div>
    </main>
  );
}

export default App;
