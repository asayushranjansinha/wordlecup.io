import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { useUserStore } from "../hooks/useUserStore";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import ChatBox from "../components/ChatBox";
import moment from "moment";
import { toast } from "sonner";

const ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;

function ChatRoom() {
  const socketRef = useRef(null);
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Establish socket connection when component mounts
    socketRef.current = socketIOClient(ENDPOINT, { transports: ["websocket"] });

    // Event listeners for socket events
    socketRef.current.on("connect", () => {
      console.log("Connected to server");
    });

    socketRef.current.emit("joined", user);

    socketRef.current.on("welcomeUser", (data) => {
      toast(data.message);
      // console.log(data.message);
    });

    socketRef.current.on("userJoined", (data) => {
      // console.log(data);
      const formattedTimestamp = moment(data.timestamp).format("h:mm A");
      const newMessage = {
        username: data.user,
        content: data.message,
        timestamp: formattedTimestamp,
        type: "system",
      };
      setChatMessages((prev) => [...prev, newMessage]);
    });

    socketRef.current.on("leave", (data) => {
      // console.log(data.message);
      const formattedTimestamp = moment(data.timestamp).format("h:mm A");
      const newMessage = {
        username: data.user,
        content: data.message,
        timestamp: formattedTimestamp,
        type: "system",
      };
      setChatMessages((prev) => [...prev, newMessage]);
    });

    // Clean up function to disconnect the socket when the component unmounts
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current.off();
      }
    };
  }, []);

  useEffect(() => {
    socketRef.current.on("message", (data) => {
      const formattedTimestamp = moment(data.timestamp).format("h:mm A");
      const newMessage = {
        username: data.user,
        content: data.message,
        timestamp: formattedTimestamp,
        type:
          data.user === "Admin"
            ? "system"
            : data.user === user
            ? "sent"
            : "received",
      };
      setChatMessages((prev) => [...prev, newMessage]);
    });
    return () => {
      if (socketRef.current) {
        socketRef.current.off();
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  function sendMessage(message) {
    socketRef.current.emit("message", { message });
  }

  // function
  return (
    <main className="w-full h-full bg-gradient-to-tr from-[#2193b0] to-[#6dd5ed] dark:bg-gradient-to-tr dark:from-[#000000] dark:to-[#434343]">
      <div className="container mx-auto h-full flex flex-col">
        <ChatBox messageList={chatMessages} />
        <InputBox sendMessage={sendMessage} />
      </div>
    </main>
  );
}

export default ChatRoom;
