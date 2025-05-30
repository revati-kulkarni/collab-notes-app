import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(403);
  try {
    req.user = jwt.verify(token, 'secret');
    next();
  } catch {
    res.sendStatus(403);
  }
}