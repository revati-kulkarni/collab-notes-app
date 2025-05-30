import mongoose from 'mongoose';

export interface INote extends mongoose.Document {
  title: string;
  content: string;
  sharedWith: string[];
  labels: string[];
  archived: boolean;
  pinned: boolean;
  updatedAt: Date;
  owner: string;
}

const noteSchema = new mongoose.Schema<INote>({
  title: String,
  content: String,
  sharedWith: [String],
  labels: [String],
  archived: Boolean,
  pinned: Boolean,
  updatedAt: Date,
  owner: String
});

export default mongoose.model<INote>('Note', noteSchema);