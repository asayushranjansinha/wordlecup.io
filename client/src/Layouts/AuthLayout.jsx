import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

function AuthLayout() {
  return (
    <main className="h-full w-full bg-gray-50 flex items-center justify-center">
      <Login />
    </main>
  );
}

export default AuthLayout;
