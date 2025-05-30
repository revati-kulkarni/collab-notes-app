import express from 'express';
import Note from '../models/Notes';

const router = express.Router();

router.get('/', async (req, res) => {
  const notes = await Note.find({ owner: req.user?.username });
  res.json(notes);
});

router.post('/', async (req, res) => {
  const note = new Note({ ...req.body, owner: req.user?.username, updatedAt: new Date() });
  await note.save();
  res.sendStatus(201);
});

router.put('/bulk', async (req, res) => {
  const { ids, updates } = req.body;
  await Note.updateMany({ _id: { $in: ids }, owner: req.user?.username }, { $set: updates });
  res.sendStatus(200);
});

export default router;