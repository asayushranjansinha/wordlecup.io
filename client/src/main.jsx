import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout.jsx";
import "./index.css";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import Home from "./pages/Home.jsx";
import Chat from './pages/ChatRoom.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children:[
      {
        path:'',
        element:<Home/>
      },
      
      {
        path:'/chat',
        element:<Chat/>
      },
      
    ]
  },
  {
    path: "/login",
    element: <AuthLayout />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
