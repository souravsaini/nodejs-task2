const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle incoming messages
  socket.on("chat message", (msg) => {
    console.log("message: ", msg);
    io.emit("chat message", msg); // Broadcast message to all connected clients
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
