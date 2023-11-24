const io = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to server");
  sendMessage(socket.id);
});

socket.on("chat message", (msg) => {
  console.log("Received message:", msg);
});

function sendMessage(id) {
  //Emit message after every 2 seconds
  setInterval(() => {
    const message = `Hello from client: ${id}`;
    socket.emit("chat message", message);
  }, 2000);
}
