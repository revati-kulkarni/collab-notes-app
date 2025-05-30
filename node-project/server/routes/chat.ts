import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Get chat history for a note
router.get('/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;
    
    // Validate noteId
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      return res.status(400).json({ message: 'Invalid note ID' });
    }
    
    // This would typically query a Chat or Message model
    // For now, returning a placeholder response
    res.json({
      messages: [
        { 
          id: '1',
          sender: 'user1',
          content: 'Sample chat message',
          timestamp: new Date()
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Post a new chat message
router.post('/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;
    const { content } = req.body;
    const userId = req.user?.id; // Assuming user info is added by auth middleware
    
    if (!content) {
      return res.status(400).json({ message: 'Message content is required' });
    }
    
    // In a real app, you would save to database here
    // const message = await ChatMessage.create({...})
    
    // Return placeholder response
    res.status(201).json({ 
      id: new mongoose.Types.ObjectId().toString(),
      sender: userId || 'anonymous',
      content,
      noteId,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error posting chat message:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;