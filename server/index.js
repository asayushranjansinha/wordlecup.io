const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 8080;
const activeUsers = {};

app.use(cors());

function handleNewUserJoin(socket, joiningUsername) {
  activeUsers[socket.id] = joiningUsername;
  const adminUsername = "Admin";
  const joinMessage = `${joiningUsername} has joined`;
  const timestamp = new Date().toISOString();

  socket.broadcast.emit("userJoined", {
    user: adminUsername,
    message: joinMessage,
    timestamp,
  });
  sendWelcomeMessage(socket, joiningUsername);
}

function handleUserDisconnect(socket) {
  const leavingUsername = activeUsers[socket.id];
  delete activeUsers[socket.id];
  notifyUserLeave(socket, leavingUsername);
}

function sendWelcomeMessage(socket, username) {
  const welcomeMessage = `Welcome to the Chat, ${username}!`;
  const adminUsername = "Admin";
  const timestamp = new Date().toISOString();

  socket.emit("welcomeUser", {
    user: adminUsername,
    message: welcomeMessage,
    timestamp,
  });
}

function notifyUserLeave(socket, leavingUsername) {
  const adminUsername = "Admin";
  const leaveMessage = `${leavingUsername} has left the chat`;
  const timestamp = new Date().toISOString();
  socket.broadcast.emit("leave", {
    user: adminUsername,
    message: leaveMessage,
    timestamp,
  });
}

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("joined", (joiningUsername) => {
    handleNewUserJoin(socket, joiningUsername);
  });

  socket.on("message", ({ message }) => {
    const user = activeUsers[socket.id];
    // console.log(user);
    if (!user) {
      console.log("User not found");
      return;
    }

    const timestamp = new Date().toISOString();
    io.emit("message", { user, message, timestamp });
  });

  socket.on("disconnect", () => {
    handleUserDisconnect(socket);
  });

  socket.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
