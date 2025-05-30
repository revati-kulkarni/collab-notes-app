import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth';
import noteRoutes from './routes/notes';
import chatRoutes from './routes/chat';
import { verifyToken } from './middlewares/auth';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/notes', verifyToken, noteRoutes);
app.use('/api/chat', verifyToken, chatRoutes);

export default app;