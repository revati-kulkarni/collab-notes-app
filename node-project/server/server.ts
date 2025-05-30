import http from 'http';
import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { setupSocket } from './sockets/socket';

// Load environment variables from .env file
dotenv.config();

const server = http.createServer(app);
setupSocket(server);

// Use connection string from environment variables or fallback to localhost
// mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/collabnotes')
//   .then(() => {
//     const port = process.env.PORT || 5000;
//     server.listen(port, () => console.log(`Server running on port ${port}`));
//   })
//   .catch(err => console.error('MongoDB connection error:', err));