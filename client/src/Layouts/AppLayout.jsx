import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Header
        backgroundColor="bg-gradient-to-r from-violet-600 to-indigo-900"
        logoWidth={60}
        logoHeight={60}
        titleColor="text-white"
        titleFont="font-mono"
      />
      <main className="flex-grow overflow-auto bg-gradient-to-tr from-[#2193b0] to-[#6dd5ed] dark:bg-gradient-to-tr dark:from-[#000000] dark:to-[#434343]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
