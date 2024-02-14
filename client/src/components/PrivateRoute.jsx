import React, { useEffect } from "react";
import { useUserStore } from "../hooks/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { user } = useUserStore();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
