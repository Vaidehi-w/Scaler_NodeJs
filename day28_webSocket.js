const WebSocket = require('ws');

function setupWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });

    // Store connected clients
    const clients = new Set();

    // WebSocket connection handler
    wss.on('connection', (ws) => {
        // Add client to the set
        clients.add(ws);
        
        // Message handler
        ws.on('message', (message) => {
            // Broadcast message to all connected clients
            broadcast(message);
        });

        // Error handler
        ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });

        // Connection close handler
        ws.on('close', () => {
            // Remove client from the set
            clients.delete(ws);
        });
    });

    // Function to broadcast message to all connected clients
    function broadcast(message) {
        clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }
}

module.exports = setupWebSocketServer;
