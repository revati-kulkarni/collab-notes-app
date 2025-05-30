import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface ChatMessage {
  user: string;
  message: string;
}

const socket: Socket = io('http://localhost:5000', {
  auth: { token: localStorage.getItem('token') || '' }
});

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);

  useEffect(() => {
    socket.on('message', (data: ChatMessage) => {
      setChat(prev => [...prev, data]);
    });
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {chat.map((c, i) => (
          <p key={i}><b>{c.user}:</b> {c.message}</p>
        ))}
      </div>
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={() => socket.emit('message', { room: 'main', message })}>Send</button>
    </div>
  );
};

export default App;
