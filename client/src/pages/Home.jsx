import React, { useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks/useUserStore";

function Home() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <main className="h-full w-full bg-gradient-to-tr from-[#2193b0] to-[#6dd5ed] dark:bg-gradient-to-tr dark:from-[#000000] dark:to-[#434343]">
      <div className="h-full container mx-auto flex items-center justify-center pt-20 pb-40">
        <div className="bg-gradient-to-tr from-[#77A1D3] via-[#79CBCA] to-[#E684AE] shadow-md rounded-lg p-8 flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold text-red-800 text-center animate-pulse animation-delay-2000">
            Active Chat Room
          </h2>
          <Link
            to="/chat"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-[#DC2424] to-[#4A569D]focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-solid border-gray-100 hover:shadow-md" // Modified styling
          >
            Join To Chat
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
