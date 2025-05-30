import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import { Server as HTTPServer } from 'http';

export function setupSocket(server: HTTPServer) {
  const io = new Server(server, { cors: { origin: '*' } });

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    try {
      socket.data.user = jwt.verify(token, 'secret');
      next();
    } catch {
      next(new Error('Auth error'));
    }
  });

  io.on('connection', socket => {
    socket.on('join', (room: string) => socket.join(room));
    socket.on('message', ({ room, message }) => {
      io.to(room).emit('message', { user: socket.data.user.username, message });
    });
  });
}