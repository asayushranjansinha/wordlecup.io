import React, { useState } from "react";
import { useUserStore } from "../hooks/use-user-store";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const { user, login } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === "") {
      alert("Please enter a username");
      return;
    }

    console.log("Username:", username);
    login(username);
    console.log(user);
    setUsername("");
    navigate("/chat");
  };

  return (
    <main className="h-screen bg-blue-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="h-5/6 w-11/12 max-w-lg border border-red-800 flex flex-col justify-center items-center p-6 rounded-md shadow-lg bg-white"
      >
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
            onChange={(event) => setUsername(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enter Chat Room
        </button>
      </form>
    </main>
  );
}

export default Login;
