import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { Toaster } from 'sonner';
import AppLayout from "../src/Layouts/AppLayout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import "./index.css";
import ChatRoom from "./pages/ChatRoom.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";


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
     <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
