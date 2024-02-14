import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import AppLayout from "../src/Layouts/AppLayout.jsx";
import ChatRoom from "./pages/ChatRoom.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} exact />
      <Route element={<AppLayout />}>
        <Route path="" element={<Home />} />

        {/* private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<ChatRoom />} />
        </Route>
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
