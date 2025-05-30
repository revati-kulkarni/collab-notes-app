export function handleConnection(socket: WebSocket) {
    console.log('New client connected');

    socket.on('message', (message: string) => {
        console.log(`Received message: ${message}`);
        // Handle incoming messages
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
}

export function setupWebSocketServer(server: any) {
    const WebSocket = require('ws');
    const wss = new WebSocket.Server({ server });

    wss.on('connection', handleConnection);
}