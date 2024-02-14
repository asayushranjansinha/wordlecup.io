import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks/useUserStore";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { user, login } = useUserStore();

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
    <div className="h-full w-full bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="w-8 h-8 mr-2" src="./logo.png" alt="logo" />
          WordleCup.io
        </Link>
        <div className="w-full bg-sky-300 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg lg:text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Choose Your Username
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Jane Doe"
                  required=""
                  onKeyDown={handleKeyDown}
                  autoComplete="username"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
