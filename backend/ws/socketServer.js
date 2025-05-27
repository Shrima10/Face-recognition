const WebSocket = require('ws');
const { spawn } = require('child_process');

function startSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', ws => {
    console.log('Client connected to WS');

    // Spawn RAG Python server client or handle WS message relay here
    ws.on('message', message => {
      console.log('Received from client:', message);
      // Here you should forward to RAG engine or handle chat
      ws.send(`Echo: ${message}`); // placeholder echo
    });

    ws.on('close', () => console.log('Client disconnected from WS'));
  });

  return wss;
}

module.exports = startSocketServer;
