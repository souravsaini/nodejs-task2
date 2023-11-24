# Real-time Web Chat System

This is a real-time chat system using Socket.IO with Node.js.

## Setup Instructions

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/souravsaini/nodejs-task2.git
   cd nodejs-task2
   ```

2. Install Client dependencies:

   ```bash
   cd client
   npm install
   ```

3. Install Server dependencies:

   ```bash
   cd ../server
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Access the Frontend:

   - Open multiple terminal windows.
   - Go to nodejs-task2/client directory in each one of them.
   - Run the following:

     ```bash
     node client.js
     ```

### Socket.IO Events

#### Client Side

- `connect`: Event emitted when a client establishes a WebSocket connection to the server.
- `disconnect`: Event emitted when a client disconnects from the server.
- `chat message`: Event to send and receive chat messages between clients.

#### Server Side

- `io.on('connection', callback)`: Listens for a new client connection.
- `socket.on('chat message', callback)`: Listens for chat messages from clients and broadcasts them to all connected clients.
