import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks/useUserStore";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { login } = useUserStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(username)

    if (username.trim() === "") {
      alert("Please enter a valid username");
      return;
    }

    login(username);
    setUsername("");
    navigate("/chat");
  };
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    handleSubmit(e);
  };

  return (
    <main className="h-full w-full bg-gradient-to-tr from-[#2193b0] to-[#6dd5ed] dark:bg-gradient-to-tr dark:from-[#000000] dark:to-[#434343] flex items-center justify-center">
      <div className="bg-gradient-to-tr from-[#77A1D3] via-[#79CBCA] to-[#E684AE] shadow-md rounded-lg p-8 flex flex-col items-center space-y-4">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src="./logo.png" alt="logo" />
          WordleCup.io
        </Link>
        <form
          className="space-y-4 md:space-y-6 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="username" className="sr-only">
              Your username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="bg-gray-100 dark:bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Jane Doe"
              required=""
              onKeyDown={handleKeyDown}
              autoComplete="username"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-[#DC2424] to-[#4A569D] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-solid border-gray-100 hover:shadow-md"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
