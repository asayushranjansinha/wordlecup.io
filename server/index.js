const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const io = socketIO(server);

io.on('connection',(socket)=>{
    console.log("New Connection");
})

server.listen(PORT, () => {
  console.log(`Server is running on http:localhost:${PORT}`);
});
